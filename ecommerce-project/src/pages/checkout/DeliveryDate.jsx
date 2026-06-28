import dayjs from "dayjs";

export function DeliveryDate({ selectionDeliveryOption }) {
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectionDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D",
      )}
    </div>
  );
}