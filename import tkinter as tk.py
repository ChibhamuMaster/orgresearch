import tkinter as tk
from tkinter import messagebox

# Sample product data
products = {
    "123456789012": {"name": "Apple", "price": 0.50},
    "987654321098": {"name": "Banana", "price": 0.30},
    "111111111111": {"name": "Orange", "price": 0.80},
    # Add more products as needed
}

class POSApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Pehovelo Trading Omungwelume")
        self.root.geometry("600x500")
        self.root.configure(bg="#F0F0F0")  # Background colour

        # Title with News Ticker
        self.ticker_label = tk.Label(
            root, text="Pehovelo Trading Omungwelume - Welcome to our POS System!",
            font=("Helvetica", 12, "bold"), bg="yellow", fg="black"
        )
        self.ticker_label.pack(fill=tk.X, padx=10, pady=5)

        # Cart display area
        self.cart = []
        self.cart_display = tk.Text(root, height=15, width=50, state='disabled', bg="#E8F6F3")
        self.cart_display.pack(pady=10, padx=10)

        # Input field for barcode
        self.barcode_entry = tk.Entry(root, font=("Arial", 14), width=30)
        self.barcode_entry.pack(pady=10, padx=10)
        self.barcode_entry.bind("<Return>", self.add_item_to_cart)  # Enter key to add item

        # Total label
        self.total_label = tk.Label(root, text="Total: $0.00", font=("Arial", 14), bg="#F0F0F0")
        self.total_label.pack(pady=10, padx=10)

        # Complete Sale Button
        self.complete_button = tk.Button(
            root, text="Complete Sale", font=("Arial", 12), bg="#4CAF50", fg="white", width=15, command=self.complete_sale
        )
        self.complete_button.pack(pady=10, padx=10)
        self.add_hover(self.complete_button, "#45A049", "#4CAF50")

        # Footer
        self.footer = tk.Label(
            root, text="Designed by Ben Chibhamu | Call 0813087329", font=("Arial", 10), bg="gray", fg="white"
        )
        self.footer.pack(side=tk.BOTTOM, fill=tk.X, padx=10, pady=5)

    def add_hover(self, widget, hover_bg, normal_bg):
        """Add hover effect to button.

        Uses bind to attach enter and leave events to the widget.
        When the widget is hovered over, the background colour changes to hover_bg.
        When the widget is exited, the background colour changes to normal_bg.
        """
        def on_enter(e):
            """Set button background to hover colour on mouse enter"""
            widget['background'] = hover_bg

        def on_leave(e):
            """Set button background to normal colour on mouse leave"""
            widget['background'] = normal_bg

        widget.bind("<Enter>", on_enter)
        widget.bind("<Leave>", on_leave)

    def add_item_to_cart(self, event=None):
        """Add item to cart by barcode
        If barcode is valid, appends item to cart, updates cart display and total.
        If not, shows error message."""

        barcode = self.barcode_entry.get().strip()
        if barcode in products:
            item = products[barcode]
            self.cart.append(item)
            self.update_cart_display()
            self.update_total()
            self.barcode_entry.delete(0, tk.END)
        else:
            messagebox.showerror("Error", "Product not found. Please try again.")

    def update_cart_display(self):
        self.cart_display.config(state='normal')
        self.cart_display.delete(1.0, tk.END)
        for item in self.cart:
            self.cart_display.insert(tk.END, f"{item['name']} - ${item['price']:.2f}\n")
        self.cart_display.config(state='disabled')

    def update_total(self):
        total = sum(item["price"] for item in self.cart)
        self.total_label.config(text=f"Total: ${total:.2f}")

    def complete_sale(self):
        if self.cart:
            total = sum(item["price"] for item in self.cart)
            messagebox.showinfo("Sale Completed", f"Total Amount: ${total:.2f}\nThank you for shopping!")
            self.cart.clear()
            self.update_cart_display()
            self.update_total()
        else:
            messagebox.showwarning("Empty Cart", "The cart is empty. Please add items.")

if __name__ == "__main__":
    root = tk.Tk()
    app = POSApp(root)
    root.mainloop()

