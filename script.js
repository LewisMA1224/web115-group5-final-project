"use strict";

// Select the HTML elements that the game will update.
const sceneTitle = document.getElementById("scene-title");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices");
const restartButton = document.getElementById("restart-btn");

// Starter scenes. Expand these using the README flowchart.
const scenes = {
    opening: {
        title: "You Wake on the Beach",
        text: "After surviving a plane crash, you wake up on a remote island. "
            + "Will you search inland or explore the beach?",
        choices: [
            { label: "Search inland", nextScene: "inland" },
            { label: "Search the beach", nextScene: "beach" }
        ]
    },

    // Mark: expand the inland route.
    inland: {
        title: "The Inland Path",
        text: "You head inland and discover an island community. "
            + "This route is still under construction.",
        choices: []
    },

    // Adair: expand the beach and rescue route.
    beach: {
        title: "Search the Wreckage",
        text: "You search the wreckage and find an emergency kit. "
            + "This route is still under construction.",
        choices: []
    }
};

// Display a scene and create its choice buttons.
function showScene(sceneId) {
    const scene = scenes[sceneId];

    sceneTitle.textContent = scene.title;
    storyText.textContent = scene.text;

    // Remove the previous scene's buttons.
    choicesContainer.replaceChildren();

    scene.choices.forEach(function(choice) {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = choice.label;

        button.addEventListener("click", function() {
            showScene(choice.nextScene);
        });

        choicesContainer.appendChild(button);
    });
}

restartButton.addEventListener("click", function() {
    showScene("opening");
});

// Display the opening when the page loads.
showScene("opening");