"use strict";
document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
    AOS.init();
    plusButtonEventListener();
}

function plusButtonEventListener() {
    document.getElementById("plus-button").addEventListener("click", () => {
        removeExploreHeader();
        addExploreCard();
    });
}

function removeExploreHeader() {
    const details = document.getElementById('details-container');
    details.remove();
}

function addExploreCard() {
    const container = document.getElementById('background-container');
    const exploreCard = document.createElement("div");
    const exploreCardCloseButtonContainer = document.createElement("div");
    const exploreCardCloseButton = document.createElement("button");
    const exploreCardCloseSpan = document.createElement("span");
    const exploreCardTitle = document.createElement("span");
    const exploreCardDivider = document.createElement("div");
    const exploreCardText = document.createElement("p");
    const exploreCardButton = document.createElement("a");

    const exploreCardTitleText = document.createTextNode("Explore");
    const exploreCardTextText = document.createTextNode("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ");
    const exploreCardButtonText = document.createTextNode("READ MORE");

    exploreCardCloseButton.setAttribute("type", "button");

    exploreCard.classList.add("card");
    exploreCardCloseButton.classList.add("close");
    exploreCardCloseSpan.classList.add("close-icon");
    exploreCardTitle.classList.add("card-title");
    exploreCardDivider.classList.add("card-divider");
    exploreCardText.classList.add("card-text");
    exploreCardButton.classList.add("btn", "btn-explore-card");

    exploreCard.setAttribute("data-aos", "zoom-out-down");
    exploreCardCloseButton.setAttribute("aria-label", "Close");
    exploreCardCloseSpan.setAttribute("aria-hidden", "true");

    exploreCardTitle.appendChild(exploreCardTitleText);
    exploreCardText.appendChild(exploreCardTextText);
    exploreCardButton.appendChild(exploreCardButtonText);

    exploreCardCloseSpan.innerHTML = "&times;";
    exploreCard.setAttribute("id", "explore-card");
    exploreCardCloseButton.addEventListener("click", () => {
        removeExploreCard();
    })

    container.appendChild(exploreCard);
    exploreCard.appendChild(exploreCardCloseButtonContainer);
    exploreCardCloseButtonContainer.appendChild(exploreCardCloseButton);
    exploreCardCloseButton.appendChild(exploreCardCloseSpan);
    exploreCard.appendChild(exploreCardTitle);
    exploreCard.appendChild(exploreCardDivider);
    exploreCard.appendChild(exploreCardText);
    exploreCard.appendChild(exploreCardButton);
}

function removeExploreCard() {
    const card = document.getElementById('explore-card');
    card.remove();
    restoreExploreHeader();
}

function restoreExploreHeader() {
    const container = document.getElementById('background-container');
    const details = document.createElement("div");
    const detailsHeader = document.createElement("h1");
    const detailsButton = document.createElement("button");
    const detailsSpan = document.createElement("span");

    const detailsHeaderText =  document.createTextNode("Explore");
    const detailsSpanText =  document.createTextNode("More Details");

    details.setAttribute("id", "details-container");
    detailsButton.setAttribute("id", "plus-button");

    detailsHeader.classList.add("text-header");
    detailsSpan.classList.add("more-details")

    details.setAttribute("data-aos", "zoom-in");

    detailsHeader.appendChild(detailsHeaderText);
    detailsSpan.appendChild(detailsSpanText);

    container.appendChild(details);
    details.appendChild(detailsHeader);
    details.appendChild(detailsButton);
    details.appendChild(detailsSpan);

    document.getElementById("plus-button").addEventListener("click", () => {
        removeExploreHeader();
        addExploreCard();
    });
}