// определение устройства
export default function getIsMobile(device) {
  const isMobile = Boolean(
    device.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return isMobile;
}
