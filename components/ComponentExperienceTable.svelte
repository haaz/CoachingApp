<script>
    export let experiences = [];
</script>



<table class="table">

    <thead>
        <tr>
            <th>ID </th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        
        {#each experiences as experience}
            <tr>
                <td>{experience.id}</td>
                <td>{experience.Experience}</td>
            </tr>
        {/each}
    </tbody>
</table>
