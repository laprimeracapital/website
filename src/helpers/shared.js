export const shareFacebook = (link) => {
    window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
        "_blank",
        "noopener,noreferrer"
    );
};

export const shareWhatsApp = (title, link) => {
    const message = encodeURIComponent(
        `📰 *${title}*\n\n` +
        `👉 Léelo aquí:\n${link}`
    );

    window.open(
        `https://wa.me/?text=${message}`,
        "_blank",
        "noopener,noreferrer"
    );
};

export const shareX = (title, link) => {
    const message = encodeURIComponent(
        `${title}\n\n🔗 ${link}`
    );

    window.open(
        `https://twitter.com/intent/tweet?text=${message}`,
        "_blank",
        "noopener,noreferrer"
    );
};

export const shareLinkedIn = (link) => {
    // LinkedIn también depende 100% del preview del enlace
    window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`,
        "_blank",
        "noopener,noreferrer"
    );
};