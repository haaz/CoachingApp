<script>
    export let title = "";
    export let coaching = [];
</script>

<div class="card-body">
    <h5 class="card-title">
        {title} - {coaching.date}
    </h5>
    <div class="row" style="width: 16rem;">
        <div class="col">Date</div>
        <div class="col">{coaching.date}</div>
    </div>
    <div class="row" style="width: 16rem;">
        <div class="col">Start Time</div>
        <div class="col">{coaching.timeStart}</div>
    </div>
    <div class="row" style="width: 16rem;">
        <div class="col">End Time</div>
        <div class="col">{coaching.timeEnd}</div>
    </div>
</div>
