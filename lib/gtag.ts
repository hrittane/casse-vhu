export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value: string; }) => {
    (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};