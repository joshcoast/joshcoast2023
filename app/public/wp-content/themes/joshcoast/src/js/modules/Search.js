import $ from 'jquery';

class Search {
    // 1. Describe or create/initiate our object.
    constructor() {
        this.addSearchHTML();
        this.resultsDiv = $("#search-overlay__results");
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.isSpinnerShowing = false;
        this.searchField = $("#search-term");
        this.events(); // call and load the events.
        this.previousValue;
        this.typingTimer;
    }

    // 2. Events
    events() {
        this.openButton.on("click", this.openOverlay.bind(this));
        // the "on" method in jQuery sets the "this" to the element. We use the "bind()"
        // method to tell jQuery to not do that and set it to our object with "this".
        this.closeButton.on("click", this.closeOverlay.bind(this));
        this.searchField.on("keyup", this.typingLogic.bind(this)); // Keydown is too fast.
    }

    // 3. Methods (function, actions...)
    typingLogic() {
        // Only if the key strokes have changed the value do we want to do any of this.
        if (this.searchField.val() != this.previousValue) {
            clearTimeout(this.typingTimer); // clear the timer so we don't hit the search repeatedly.

            if (this.searchField.val()) {
                if ( !this.isSpinnerShowing ) {
                    this.resultsDiv.html('<div class="brent-spiner-loader"><i class="fa-solid fa-fan brent-spiner"></i></div>');
                    this.isSpinnerShowing = true;
                }
                this.typingTimer = setTimeout(this.getResults.bind(this), 750);
            } else {
                this.resultsDiv.html('');
                this.isSpinnerShowing = false;
            }
        }
        this.previousValue = this.searchField.val();
    }

    getResults() {
        // the arrow function "=>" doesn't change the value of the "this" keyword.
        // See functions file for the wp_localize_script() to understand the joshcoastData.root_url
        // async with jQuery. the first arg in when(), matches the first arg in the then() anonymise function.
        $.when(
            // This gets returned to the first arg in the then() function.
            $.getJSON( joshcoastData.root_url + '/wp-json/wp/v2/posts?search=' + this.searchField.val()),
            // This gets returned to the second arg in the then() function.
            $.getJSON( joshcoastData.root_url + '/wp-json/wp/v2/pages?search=' + this.searchField.val())
        ).then((posts, pages) => {
                // The posts and the pages arrays return more than just the response, also returns error/success info, so we need to use the [0] to get the actual response.
                var combinedResults = posts[0].concat(pages[0]);
                this.resultsDiv.html(`
                    <h2>Search Results</h2>
                    ${combinedResults.length ? '<ul>' : '<p>No search results</p>'}
                        ${combinedResults.map(item => `<li><a href='${item.link}'>${item.title.rendered}</a> ${item.type == 'post' ? `by ${item.authorName}` : ''} </li>`).join('')}
                    ${combinedResults.length ? '</ul>' : '' }
                `);
                this.isSpinnerShowing = false;
        }, () => {
            this.resultsDiv.html('<p>Unexpected Error, please try again.</p>')
        });
    }
    openOverlay() {
        this.searchOverlay.addClass("search-overlay--active");
        $('body').addClass("no-scroll");
        this.searchField.val('');
        setTimeout(() => this.searchField.focus(), 301 );
        this.isSpinnerShowing = true;
    }

    closeOverlay() {
        this.searchOverlay.removeClass("search-overlay--active");
        $('body').removeClass("no-scroll");
    }

    addSearchHTML() {
        $("body").append(`
            <div class="search-overlay">
                <div class="search-overlay__top">
                    <i class="fa-solid fa-magnifying-glass search-overlay__icon" aria-hidden="true" ></i>
                    <div class="container">
                        <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">
                    </div>
                    <i class="fa-regular fa-circle-xmark search-overlay__close" aria-hidden="true"></i>
                </div>
                <div class="container">
                    <div id="search-overlay__results" class="search-overlay__results">
                    </div>
                </div>
            </div>
        `);
    }
}

export default Search;