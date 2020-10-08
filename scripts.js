var mobileMenuOpen = false;

function toggleMobileMenu() {
	if (mobileMenuOpen) {
		document.getElementById("mobileMenu").style.height = "0";
		document.getElementById("menuIcon").src = "Icons/menu.png";
	}
	else {
		document.getElementById("mobileMenu").style.height = "auto";
		document.getElementById("menuIcon").src = "Icons/close.png";
	}
	mobileMenuOpen = !mobileMenuOpen;
}
