import Swal from 'sweetalert2';

export function ShowSwalMsg(icon, msg) {
  Swal.fire({
    title: getSwalTitle(icon),
    text: msg,
    icon,
  });
}

export function getSwalTitle(val) {
  switch (val) {
    case 'error':
      return 'Error!';
    case 'warning':
      return 'Warning!';
    case 'success':
      return 'Success!';
    default:
      return 'Error!';
  }
}