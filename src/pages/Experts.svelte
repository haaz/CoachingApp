<script>
    import { each, onMount } from "svelte/internal";
    import axios from "axios";
    import ComponentExpertDetail from "../../components/ComponentExpertDetail.svelte";
    let baseUrl =
        "https://e513f4be-e952-4031-8512-fefeda2781d0.mock.pstmn.io/coaching/";

    var control = 1;

    let experts = [];

    onMount(() => {
        getExperts();
    });

    function getExperts() {
        axios.get(baseUrl + "experts").then((response) => {
            experts = response.data;
        });
    }
</script>

<div class="row justify-content-between">
    <div class="col-7">
        <h1>List of all experts</h1>
    </div>
    <div class="col-5">
        <a class="btn btn-primary" href="#/new-expert" role="button"
            >New Expert</a
        >
    </div>
</div>
<div class="row row-cols-1 row-cols-md-2 g-4">
    {#each experts as expertObject}
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <ComponentExpertDetail expert={expertObject} />
                </div>
            </div>
        </div>
    {/each}
</div>
