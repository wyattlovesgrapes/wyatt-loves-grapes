const partyContainer = document.getElementById('party-container');
//let partyIsRaging = false;

export function partyTime() {
  partyContainer.style.top = '0';
  //partyIsRaging = true;
  console.log('the party has started');
}

export function stopTheParty(event) {
  // Assuming your icon has an ID 'party-time', you can replace it with the actual ID of your div
  const partyDiv = document.getElementById('party-time');

  // Check if the clicked element or any of its ancestors is the partyDiv
  if (!event.target.closest('#party-time')) {
    partyContainer.style.top = '-100%';
    
    // Update to run console message only if party is active
    // console.log('the party has stopped');
  }
}