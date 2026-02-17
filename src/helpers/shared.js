const getCurrentUrl = () => encodeURIComponent(window.location.href);
const getText = () => encodeURIComponent(document.title || "Mira esta noticia");

export const shareFacebook = () => {
    window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${getCurrentUrl()}`,
        "_blank",
        "noopener,noreferrer"
    );
};

export const shareWhatsApp = () => {
    window.open(
        `https://wa.me/?text=${getText()}%20${getCurrentUrl()}`,
        "_blank",
        "noopener,noreferrer"
    );
};

export const shareX = () => {
    window.open(
        `https://twitter.com/intent/tweet?text=${getText()}&url=${getCurrentUrl()}`,
        "_blank",
        "noopener,noreferrer"
    );
};

export const shareLinkedIn = () => {
    window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${getCurrentUrl()}`,
        "_blank",
        "noopener,noreferrer"
    );
};
