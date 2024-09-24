import { useCheckout } from "./useCheckout";
import DashboardButton from "../../ui/DashboardButton";
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <DashboardButton
      variations="primary"
      sizes="small"
      onClick={() => checkout(bookingId)}
    >
      Check out
    </DashboardButton>
  );
}

export default CheckoutButton;
