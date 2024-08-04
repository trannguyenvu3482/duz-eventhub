export const headerLinks = [
  {
    label: "Trang chủ",
    route: "/",
  },
  {
    label: "Tạo sự kiện",
    route: "/events/create",
  },
  {
    label: "Profile",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
