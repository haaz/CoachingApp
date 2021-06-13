<script>
    import axios from "axios";

    import ComponentExperienceForm from "../../components/ComponentExperienceForm.svelte";
    let baseUrl =
        "https://e513f4be-e952-4031-8512-fefeda2781d0.mock.pstmn.io/coaching/";

    let experience = {
        Experience: "",
    };

    function createObject(pathEnding, object) {
        axios.post(baseUrl + pathEnding, object).then((response) => {
            alert("The entry was successfully created");
        });
    }
</script>

<h1>Create Experience</h1>

<form>
    <div class="mb-3">
        <ComponentExperienceForm bind:experience />
    </div>

    <button
        type="button"
        on:click={createObject("experiences", experience)}
        class="btn btn-primary">Create Experience</button
    >
</form>
