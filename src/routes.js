// Pages
import Home from "./pages/Home.svelte";
import Coachings from "./pages/Coachings.svelte";
import Experiences from "./pages/Experiences.svelte";
import Experts from "./pages/Experts.svelte";
import NewExperience from "./pages/NewExperience.svelte";
import NewExpert from "./pages/NewExpert.svelte";

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/coachings': Coachings,
    '/experts': Experts,
    '/experiences': Experiences,
    '/new-experience': NewExperience,
    '/new-expert': NewExpert,

}