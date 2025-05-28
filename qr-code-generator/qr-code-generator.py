import qrcode

def generate_qrcode(data, filename="qrcode.png", version=1, box_size=10, border=4):
    """
    Generates a QR code from the provided data and saves it as an image file.
    
    Parameters:
    - data: The information to encode in the QR code (text, URL, etc.)
    - filename: Output image file name.
    - version: Controls the size of the QR Code (1 to 40).
    - box_size: Size of each box in pixels.
    - border: Border width in boxes.
    """
    qr = qrcode.QRCode(
        version=version,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=box_size,
        border=border,
    )

    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(filename)
    print(f"QR code saved as {filename}")

if __name__ == "__main__":
    user_input = input("Enter text or URL to generate QR code: ")
    output_file = input("Enter output filename (default: qrcode.png): ") or "qrcode.png"
    
    try:
        generate_qrcode(user_input, output_file)
    except Exception as e:
        print(f"An error occurred: {e}")