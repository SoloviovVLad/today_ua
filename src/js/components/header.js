const header = () => {
	const selectors = {
		iconSearch: '.js-header-icon-search',
		burger: '.js-header-burger',
	};

	const classes = {
		bodyMod: 'body--open_menu',
		searchMenu: 'header--open_search',
		navMenu: 'header--open_nav',
	};

	const iconSearch = document.querySelector(selectors.iconSearch);
	const burger = document.querySelector(selectors.burger);
	const headerEl = document.querySelector('.header');

	if (headerEl && iconSearch) {
		iconSearch.addEventListener('click', () => {
			if (!headerEl.classList.contains(classes.searchMenu)) {
				if (headerEl.classList.contains(classes.navMenu)) {
					headerEl.classList.remove(classes.navMenu);
				}
				headerEl.classList.add(classes.searchMenu);
			} else {
				headerEl.classList.toggle(classes.searchMenu);
			}
		});
	}

	if (headerEl && burger) {
		burger.addEventListener('click', () => {
			if (!headerEl.classList.contains(classes.navMenu)) {
				if (headerEl.classList.contains(classes.searchMenu)) {
					headerEl.classList.remove(classes.searchMenu);
				}
				headerEl.classList.add(classes.navMenu);
			} else {
				headerEl.classList.toggle(classes.navMenu);
			}
		});
	}
	// const lang = document.querySelector(selectors.lang);
	// const langDropdown = document.querySelector(selectors.langDropdown);

	// if (lang && langDropdown) {
	// 	lang.addEventListener('click', () => {
	// 		langDropdown.classList.toggle(selectors.langDropdownOpen);
	// 	});

	// 	window.addEventListener('scroll', () => {
	// 		if (langDropdown.classList.contains(selectors.langDropdownOpen)) {
	// 			langDropdown.classList.remove(selectors.langDropdownOpen);
	// 		}
	// 	});
	// }
};

export default header;
