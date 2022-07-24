import React from 'react'
import { Link } from 'react-router-dom'

export default function Credits() {
    //https://www.youtube.com/watch?v=kHrV2ZHzF-0
    return (
        <div className="creditcontainer">
            <Link to="/">
                <div className="wrapperScrollText">
                    <div className="scrollText">
                        <h1>swapi client</h1>
                        <p>
                            As part of our recruiting process we are interested
                            in you taking the following assessment: If you have
                            any questions on the below information, feel free to
                            reach out! Also, if you decide that you are no
                            longer interested in proceeding with the hiring
                            process or that this assessment does not match your
                            technical abilities, we would highly appreciate you
                            letting us know about it. Assessment 1. Context We
                            want to know your skills... But, we also want you to
                            have some fun while completing this assessment!
                            Thus, you will be using the SWAPI service
                            https://swapi.dev, this is the world's first
                            quantified and programmatically-formatted set of
                            Star Wars data. We hope you enjoy working with some
                            Star Wars info, and as SW fans, we hope that one of
                            the most creative and revolutionary cinematic
                            universes ever created encourages your creativity.
                            SWAPI is a completely open API. No authentication is
                            required to query and get data. The entire API's
                            documentation is available at
                            https://swapi.dev/documentation. You can find the
                            API exposes several endpoints but we're going to
                            focus on two: People and Films. The http request
                            https://swapi.dev/api/people/ will get the first
                            page of recorded characters and you will have to
                            manage the API pagination to work with the entire
                            data. 2. The challenge: SPA using Star Wars API.
                            Your challenge is to build a Single Page Application
                            that will allow the visitors to: a. see the entire
                            list of characters b. filter the characters by film
                            c. search for a specific character, and from the
                            search results, users should be able to visualize
                            the character's info, be able to read the details,
                            and see the movie appearances of the character.
                            General dispositions You are free to use React
                            18.0.0+, Angular 13.3.5+ or Vue v3.2.33+. (only the
                            version mentioned or above is allowed to accomplish
                            the assessment) You can use Typescript and gain
                            extra points. Take into account the SOLID principles
                            The app has to look great on most the screens and
                            devices Delivering an incredible UI while keeping a
                            great user experience is key for a Front-end
                            developer! So, feel free to use your own styles or
                            any responsive design library such as Bootstrap,
                            Tailwind, Material Design, Foundation, or even any
                            theme. Remember Star Wars has a very characteristic
                            visual identity, so a common user will expect to
                            have the same aura in our app. Keeping the Star
                            Wars' visual identity is not required but can give
                            you extra points too. 😉 We are suggesting some
                            components (List, Grid, etc) but you are free to
                            choose the appropriate layout and components, if you
                            think there’s a better way to represent the data
                            feel free to bring your creativity. The bonus tasks
                            are not required, do it if you’ve got enough time. -
                            Task 1: Main List Page and Search When run, the
                            application should host a SPA. The root of the
                            application should display a list/grid with the
                            characters (you can use pagination, infinite scroll,
                            or any other solution you could think of). This
                            should be a component that allow the user to filter
                            the list by films and/or show all, and a search
                            component that will filter the results. When
                            performing a search, in case there is an error, it
                            should display the error received from the API if
                            there aren’t any results, it should display a custom
                            message, otherwise, it should display all the
                            returned results from the API displaying at least
                            the name and home-world. Task 2: Details Page Seeing
                            the search results is great, but we'd love to see
                            the detailed information from a character of choice.
                            The minimum info that should be displayed on the
                            details page are the following: Name Homeworld Birth
                            year List of the films where the character appears
                            Date-time of the last edition of the info (format
                            MM/DD/YYYY HH:MM) The search component should still
                            be available and if used should behave like the
                            initial search page going back and displaying the
                            results. The search component should keep my last
                            used search criteria. The URL of the detail page
                            should be /character/XXX where XXX is the name of
                            that specific character and when performing the
                            search the URL should always be the root. Task 3:
                            404 Not Found When using the detail pages,
                            sometimes, it can happen that we misspell the name
                            or might enter an invalid one when manually
                            navigating to this page through the browser bar.
                            When you navigate to a page and there is no
                            character found, then a nice Not Found page should
                            be displayed. This same behavior should apply if
                            attempting to navigate to non-existent routes on the
                            app. Task 4: Publish It Publish your application to
                            the Cloud using Microsoft Azure Services, AWS, or
                            whatever you feel comfortable with. As part of our
                            recruiting process we are interested in you taking
                            the following assessment: If you have any questions
                            on the below information, feel free to reach out!
                            Also, if you decide that you are no longer
                            interested in proceeding with the hiring process or
                            that this assessment does not match your technical
                            abilities, we would highly appreciate you letting us
                            know about it. Assessment 1. Context We want to know
                            your skills... But, we also want you to have some
                            fun while completing this assessment! Thus, you will
                            be using the SWAPI service https://swapi.dev, this
                            is the world's first quantified and
                            programmatically-formatted set of Star Wars data. We
                            hope you enjoy working with some Star Wars info, and
                            as SW fans, we hope that one of the most creative
                            and revolutionary cinematic universes ever created
                            encourages your creativity. SWAPI is a completely
                            open API. No authentication is required to query and
                            get data. The entire API's documentation is
                            available at https://swapi.dev/documentation. You
                            can find the API exposes several endpoints but we're
                            going to focus on two: People and Films. The http
                            request https://swapi.dev/api/people/ will get the
                            first page of recorded characters and you will have
                            to manage the API pagination to work with the entire
                            data. 2. The challenge: SPA using Star Wars API.
                            Your challenge is to build a Single Page Application
                            that will allow the visitors to: a. see the entire
                            list of characters b. filter the characters by film
                            c. search for a specific character, and from the
                            search results, users should be able to visualize
                            the character's info, be able to read the details,
                            and see the movie appearances of the character.
                            General dispositions You are free to use React
                            18.0.0+, Angular 13.3.5+ or Vue v3.2.33+. (only the
                            version mentioned or above is allowed to accomplish
                            the assessment) You can use Typescript and gain
                            extra points. Take into account the SOLID principles
                            The app has to look great on most the screens and
                            devices Delivering an incredible UI while keeping a
                            great user experience is key for a Front-end
                            developer! So, feel free to use your own styles or
                            any responsive design library such as Bootstrap,
                            Tailwind, Material Design, Foundation, or even any
                            theme. Remember Star Wars has a very characteristic
                            visual identity, so a common user will expect to
                            have the same aura in our app. Keeping the Star
                            Wars' visual identity is not required but can give
                            you extra points too. 😉 We are suggesting some
                            components (List, Grid, etc) but you are free to
                            choose the appropriate layout and components, if you
                            think there’s a better way to represent the data
                            feel free to bring your creativity. The bonus tasks
                            are not required, do it if you’ve got enough time. -
                            Task 1: Main List Page and Search When run, the
                            application should host a SPA. The root of the
                            application should display a list/grid with the
                            characters (you can use pagination, infinite scroll,
                            or any other solution you could think of). This
                            should be a component that allow the user to filter
                            the list by films and/or show all, and a search
                            component that will filter the results. When
                            performing a search, in case there is an error, it
                            should display the error received from the API if
                            there aren’t any results, it should display a custom
                            message, otherwise, it should display all the
                            returned results from the API displaying at least
                            the name and home-world. Task 2: Details Page Seeing
                            the search results is great, but we'd love to see
                            the detailed information from a character of choice.
                            The minimum info that should be displayed on the
                            details page are the following: Name Homeworld Birth
                            year List of the films where the character appears
                            Date-time of the last edition of the info (format
                            MM/DD/YYYY HH:MM) The search component should still
                            be available and if used should behave like the
                            initial search page going back and displaying the
                            results. The search component should keep my last
                            used search criteria. The URL of the detail page
                            should be /character/XXX where XXX is the name of
                            that specific character and when performing the
                            search the URL should always be the root. Task 3:
                            404 Not Found When using the detail pages,
                            sometimes, it can happen that we misspell the name
                            or might enter an invalid one when manually
                            navigating to this page through the browser bar.
                            When you navigate to a page and there is no
                            character found, then a nice Not Found page should
                            be displayed. This same behavior should apply if
                            attempting to navigate to non-existent routes on the
                            app. Task 4: Publish It Publish your application to
                            the Cloud using Microsoft Azure Services, AWS, or
                            whatever you feel comfortable with.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
