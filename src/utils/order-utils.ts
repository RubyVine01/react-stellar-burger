type OrderStatus = "created" | "pending" | "done";
type UserFriendlyStatus = "Создан" | "Готовится" | "Выполнен";

const statusDisplayMap: { [key in OrderStatus]: UserFriendlyStatus } = {
  created: "Создан",
  pending: "Готовится",
  done: "Выполнен",
};

export const getStatusDisplay = (status: OrderStatus): UserFriendlyStatus => {
  return statusDisplayMap[status];
};
