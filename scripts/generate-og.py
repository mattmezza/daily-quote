#!/usr/bin/env python3
"""Generate an Open Graph image for daily-quote."""

from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
BG = "#F9F6F1"
ACCENT = "#C4A882"
TEXT_COLOR = "#2C2C2C"
MUTED = "#8B7E74"

OUT = os.path.join(os.path.dirname(__file__), "..", "og-image.png")


def get_font(name, size):
    """Load a font, falling back to default."""
    try:
        return ImageFont.truetype(name, size)
    except (IOError, OSError):
        return ImageFont.load_default()


def main():
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    # Fonts
    serif_bold = get_font("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 72)
    serif = get_font("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf", 32)
    sans = get_font("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)

    # Title: "daily­quote" (using the non-breaking hyphen character)
    title = "daily\u2011quote"
    bbox = draw.textbbox((0, 0), title, font=serif_bold)
    tw = bbox[2] - bbox[0]
    tx = (W - tw) // 2
    ty = 180
    draw.text((tx, ty), title, fill=TEXT_COLOR, font=serif_bold)

    # Decorative separator
    sep_y = ty + 100
    sep_len = 60
    dot_r = 4
    sep_color = ACCENT

    # Left line
    draw.line([(W // 2 - sep_len - 20, sep_y), (W // 2 - 8, sep_y)], fill=sep_color, width=2)
    # Dot
    draw.ellipse([(W // 2 - dot_r, sep_y - dot_r), (W // 2 + dot_r, sep_y + dot_r)], fill=sep_color)
    # Right line
    draw.line([(W // 2 + 8, sep_y), (W // 2 + sep_len + 20, sep_y)], fill=sep_color, width=2)

    # Tagline
    tagline = "A daily dose of inspiration"
    bbox = draw.textbbox((0, 0), tagline, font=serif)
    tw2 = bbox[2] - bbox[0]
    tx2 = (W - tw2) // 2
    ty2 = sep_y + 50
    draw.text((tx2, ty2), tagline, fill=MUTED, font=serif)

    # Sub-info
    info = "daily-quote.products.humux.dev"
    bbox = draw.textbbox((0, 0), info, font=sans)
    tw3 = bbox[2] - bbox[0]
    tx3 = (W - tw3) // 2
    ty3 = H - 80
    draw.text((tx3, ty3), info, fill=MUTED, font=sans)

    # Save
    img.save(OUT, "PNG")
    print(f"OG image saved to {OUT}")
    print(f"Size: {img.size}")


if __name__ == "__main__":
    main()
