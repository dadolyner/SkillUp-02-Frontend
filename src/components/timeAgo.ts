const TimeAgo = (date: string) => {
    const time = new Date(date).getTime();
    const now = new Date().getTime();

    const diff = (now - time) / 1000;

    const days = Math.floor(diff / 86400);
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor(diff / 60);
    const seconds = Math.floor(diff);

    if (days > 0) { if (days === 1) return `${days} day ago`; else return new Date(date).toLocaleDateString('sl-SL') }
    else if (hours > 0) { if (hours === 1) return `${hours} hour ago`; else return `${hours} hours ago`; }
    else if (minutes > 0) { if (minutes === 1) return `${minutes} minute ago`; else return `${minutes} minutes ago`; }
    else { if (seconds === 1) return `${seconds} second ago`; else return `${seconds} seconds ago`; }
}

export default TimeAgo;