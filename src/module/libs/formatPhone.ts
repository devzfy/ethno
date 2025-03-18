export const formatPhoneNumber = (value: string) => {
  let cleaned = value.replace(/\D/g, '');
  if (!cleaned.startsWith('998')) {
    cleaned = '998' + cleaned;
  }
  if (cleaned.length > 12) {
    cleaned = cleaned.slice(0, 12);
  }
  const formatted = cleaned.replace(
    /(\d{3})(\d{2})(\d{3})?(\d{2})?(\d{2})?/,
    (_, p1, p2, p3, p4, p5) => {
      return [p1, p2, p3, p4, p5].filter(Boolean).join(' ');
    }
  );
  return `+${formatted}`;
};
