const customer_infor = [
    {
      name: "Do Hong hai",
      customer_id: "CS001",
      email: "haidh@gmail.com",
      phone_number: "0353-999-001",
      address: "Hai Ba Trung, Ha Noi",
      ranking: "Bronze",
    },
    {
      name: "Tran Anh",
      customer_id: "CS002",
      email: "anht@gmail.com",
      phone_number: "0353-999-002",
      address: "Hai Ba Trung, Ha Noi",
      ranking: "Bronze",
    },
    {
      name: "Tran Thuy Chau",
      customer_id: "CS003",
      email: "chautt@gmail.com",
      phone_number: "0353-999-003",
      address: "Thanh Xuan, Ha Noi",
      ranking: "Silver",
    },
    {
      name: "Doan Anh Khoa",
      customer_id: "CS004",
      email: "khoada@gmail.com",
      phone_number: "0353-999-004",
      address: "Hoang Mai, Ha Noi",
      ranking: "Silver",
    },
    {
      name: "Nguyen Cong Duy",
      customer_id: "CS005",
      email: "duync@gmail.com",
      phone_number: "0353-999-005",
      address: "Hoang Mai, Ha Noi",
      ranking: "Silver",
    },
    {
      name: "Vu Duc Minh",
      customer_id: "CS006",
      email: "minhvd@gmail.com",
      phone_number: "0353-999-006",
      address: "Thanh Xuan, Ha Noi",
      ranking: "Bronze",
    },
    {
      name: "Pham Quang Huy",
      customer_id: "CS007",
      email: "huypq@gmail.com",
      phone_number: "0353-999-007",
      address: "Ha Dong, Ha Noi",
      ranking: "Bronze",
    },
    {
      name: "Do Van Cuong",
      customer_id: "CS008",
      email: "cuongdv@gmail.com",
      phone_number: "0353-999-008",
      address: "Dong Da, Ha Noi",
      ranking: "Gold",
    },
    {
      name: "Bui Xuan Dieu",
      customer_id: "CS009",
      email: "dieubx@gmail.com",
      phone_number: "0353-999-009",
      address: "Ha Dong, Ha Noi",
      ranking: "Bronze",
    },
    {
      name: "Nguyen Van Hanh",
      customer_id: "CS010",
      email: "hanhnv@gmail.com",
      phone_number: "0353-999-010",
      address: "Tay Ho, Ha Noi",
      ranking: "Bronze",
    }
  ];
export const getData = async (id) => {
    const tmp  =customer_infor.find(customer => customer.customer_id.toLowerCase() == id.toLowerCase());
    console.log(id);

    return tmp;
}