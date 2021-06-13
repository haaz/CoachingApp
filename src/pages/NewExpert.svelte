<script>
    import axios from "axios";
    import { bind } from "svelte/internal";
    import ComponentExpertForm from "../../components/ComponentExpertForm.svelte";
    let baseUrl =
        "https://e513f4be-e952-4031-8512-fefeda2781d0.mock.pstmn.io/coaching/";

    let expert = {
        fullname: "",
        skill: "",
        about: "",
        email: "",
        phone: "",
    };

    function createObject(pathEnding, object) {
        axios.post(baseUrl + pathEnding, object).then((response) => {
            alert("The entry was successfully created");
        });
    }
</script>

<h1>Create Expert</h1>

<form class="row g-3">
    <ComponentExpertForm bind:expert />

    <div class="col-12">
        <button
            type="button"
            on:click={createObject("experts", expert)}
            class="btn btn-primary">Create Expert</button
        >
    </div>
</form>
