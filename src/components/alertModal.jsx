import Swal from 'sweetalert2';

const AlertModal = (title, text, icon) => (
  Swal.fire(
    title,
    text,
    icon,
  )
);

export default AlertModal;
