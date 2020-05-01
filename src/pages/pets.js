import React, { Component } from "react"

import mapPets from "../images/mapPets.png"
import Layout from "../components/layout"

class Pets extends Component {
  render() {
    return (
      <Layout>
        <p>
        Looking for a safe haven for you and your pet? Click on the map below for the Safe Havens Mapping Project, to find a shelter that allows you to bring pets. If there’s no listing for your area, call a local animal shelter and ask about temporary assistance for pets in domestic violence situations.

<a href="https://awionline.org/safe-havens"><img src={mapPets} alt="US map"/></a>
<h3>
  Keeping Your Pets Safe
</h3>
There are many reasons why beloved animals may become homeless: overpopulation due to lack of spaying and neutering, pet owners who decide they no longer wish to keep their pets, pets that run away from home, pets who are abused by their owners. However, many pets are also displaced as a result of domestic violence.

According to <a href="http://safeplaceforpets.org/">Safe Place for Pets</a>, up to 65% of domestic violence victims are unable to escape their abusive partners because they are concerned about what will happen to their pets when they leave. In many cases, victims of domestic violence may try to take their pets with them when they are able to leave the relationship, but find that their local domestic violence shelters do not accept pets. Fortunately, this is changing, and shelters for domestic violence and abuse victims are beginning to create spaces for pets. Thanks to the Animal Welfare Institute’s Safe Havens Mapping Project, it’s becoming easier to locate shelters that accept pets.

Click to find pet shelters in your area.

If you are in an abusive relationship and have pets in your home, it can be a good idea to make your pets part of your safety plan. Here are a few suggestions for safety planning with pets:

If possible, don’t leave pets alone with an abusive partner.
If you’re thinking about getting a protective order, consider that <a href="https://www.animallaw.info/articles/ovusdomesticviolencelaws.htm">some states</a> allow pets to be a part of these.
If you are planning to leave:

Talk to friends, family or your veterinarian about temporary care for your pet. If that is not an option, search by state or zip code for services that assist domestic violence survivors with safekeeping for their pets. Try zip code first, and if there are no results, try a search by state. If none of the results are feasible for your situation, try contacting your local domestic violence or animal shelter directly. For help finding an animal shelter, visit the <a href="http://www.humanesociety.org/animal_community/resources/tips/find_local_animal_shelter.html">Humane Society website</a>.
Take steps to prove ownership of your pet: have them vaccinated and license them with your town, ensuring that these registrations are made in your name (you can change them if they aren’t).
Pack a bag for your pet that includes:
food
medicine
documents of ownership (receipts from adoption or purchase of pet, license to establish ownership, receipts for animal purchases)
health documents (veterinary or vaccination records)
leash or carrier
ID and rabies tag, if a dog or cat (these will also help establish ownership)
toys
bedding
If you must leave without your pet, remember to leave enough food, fresh bedding, litter, etc. for your pet.
If you’ve had to leave your pet behind with your abusive partner, try to ask for assistance from law enforcement officials or animal control to see if they can intervene.
If you are able to leave with your pet:

Keep pets indoors (if possible)
Avoid leaving the pet outside alone
Pick a safe route and time to walk your pet
Don’t exercise or walk pet alone
Change your veterinarian
Remember, your situation is unique, and these tips may not work for everyone. You can always call or chat with an advocate at The Deaf Hotline for more information. We can help you brainstorm ways to keep yourself and your pets safe!
        </p>
      </Layout>
    )
  }
}

export default Pets