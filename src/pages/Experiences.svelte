<script>
    import { each, onMount } from "svelte/internal";
    import axios from "axios";
    import ComponentExperienceTable from "../../components/ComponentExperienceTable.svelte";
    let baseUrl =
        "https://e513f4be-e952-4031-8512-fefeda2781d0.mock.pstmn.io/coaching/";

    let experiences = [];

    onMount(() => {
        getExperiences();
    });

    function getExperiences() {
        axios.get(baseUrl + "experiences").then((response) => {
            experiences = response.data;
        });
    }
</script>

<h1>List of all experiences</h1>

<ComponentExperienceTable {experiences} />

<a class="btn btn-primary" href="#/new-experience" role="button"
    >New Experience</a
>
