-- Trigger update rank when insert
CREATE TRIGGER set_customer_rank
BEFORE INSERT ON customers
FOR EACH ROW
SET NEW.ranking =
	CASE
		WHEN NEW.total_money_ordered >= 10000000 THEN 'Gold'
		WHEN NEW.total_money_ordered >= 5000000 THEN 'Silver'
		ELSE 'Bronze'
END;

-- Trigger update rank when update
CREATE TRIGGER update_customer_rank
BEFORE UPDATE ON customers
FOR EACH ROW
SET NEW.ranking =
	CASE
		WHEN NEW.total_money_ordered >= 10000000 THEN 'Gold'
		WHEN NEW.total_money_ordered >= 5000000 THEN 'Silver'
		ELSE 'Bronze'
END;

-- Trigger update quantity when import 
DELIMITER |
CREATE TRIGGER update_product_quantity
AFTER UPDATE ON import
FOR EACH ROW
BEGIN
    IF NEW.status = 'Checked' AND OLD.status = 'Unchecked' THEN
        UPDATE products
        INNER JOIN importdetail ON products.productID = importdetail.productID
        SET products.quantity = products.quantity + importdetail.quantity
        WHERE importdetail.importID = NEW.importID;
    END IF;
END;
|
DELIMITER ;


-- Trigger check product quantity when order
DELIMITER //
CREATE TRIGGER check_product_quantity
BEFORE UPDATE ON orders
FOR EACH ROW
BEGIN
    DECLARE hieu INT;
    IF OLD.status = 'Pending' AND NEW.status = 'Shipping' THEN
        SELECT min(P.quantity-OD.quantity) INTO hieu FROM orderdetail OD
        JOIN products P on P.productID=OD.productID
        WHERE orderID = NEW.orderID;
        
        IF hieu<0 THEN
            INSERT INTO trigger_logs (`message`) 
        			VALUES ('Product quantity insufficient');
        ELSE
            UPDATE products
            JOIN orderdetail ON products.productID = orderdetail.productID AND orderdetail.orderID = NEW.orderID
            SET products.quantity = products.quantity - orderdetail.quantity,
                products.sold = products.sold + orderdetail.quantity;
        END IF;
    END IF;
END //
DELIMITER ; 

-- -- Trigger check product quantity when order
-- DELIMITER //
-- CREATE TRIGGER check_product_quantity
-- BEFORE UPDATE ON orders
-- FOR EACH ROW
-- BEGIN
--     DECLARE product_quantity INT;
--     DECLARE order_quantity INT;
--     IF OLD.status = 'Pending' AND NEW.status = 'Shipping' THEN
--         SELECT SUM(quantity) INTO order_quantity FROM orderdetail WHERE orderID = NEW.orderID;
--         SELECT quantity INTO product_quantity FROM products WHERE productID IN (SELECT productID FROM orderdetail WHERE orderID = NEW.orderID);
--         IF order_quantity > product_quantity THEN
--             INSERT INTO trigger_logs (`message`) 
--         			VALUES ('Product quantity insufficient');
--         ELSE
--             UPDATE products
--             JOIN orderdetail ON products.productID = orderdetail.productID AND orderdetail.orderID = NEW.orderID
--             SET products.quantity = products.quantity - orderdetail.quantity,
--                 products.sold = products.sold + orderdetail.quantity;
--         END IF;
--     END IF;
-- END //
-- DELIMITER ; 

