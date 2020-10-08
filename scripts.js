var mobileMenuOpen = false;

function toggleMobileMenu() {
	if (mobileMenuOpen) {
		document.getElementById("mobileMenu").style.height = "0";
		document.getElementById("menuIcon").src = "icons/menu.png";
	}
	else {
		document.getElementById("mobileMenu").style.height = "auto";
		document.getElementById("menuIcon").src = "icons/close.png";
	}
	mobileMenuOpen = !mobileMenuOpen;
}
