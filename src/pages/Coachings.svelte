<script>
    import { each, onMount } from "svelte/internal";
    import axios from "axios";
    import ComponentExpertDetail from "../../components/ComponentExpertDetail.svelte";
    import ComponentCoaching from "../../components/ComponentCoaching.svelte";
import Experiences from "./Experiences.svelte";

    let baseUrl = "https://e513f4be-e952-4031-8512-fefeda2781d0.mock.pstmn.io/coaching/";

    let experiences = [  {
        "id": 1,
        "Experience": "varius"
    },
    {
        "id": 2,
        "Experience": "mattis pulvinar"
    },
    {
        "id": 3,
        "Experience": "sed tincidunt"
    },
    {
        "id": 4,
        "Experience": "consequat varius"
    },
    {
        "id": 5,
        "Experience": "non pretium"
    },
    {
        "id": 6,
        "Experience": "vulputate"
    },
    {
        "id": 7,
        "Experience": "consequat varius"
    },
    {
        "id": 8,
        "Experience": "in"
    },
    {
        "id": 9,
        "Experience": "non quam"
    },
    {
        "id": 10,
        "Experience": "mi pede"
    },
    {
        "id": 11,
        "Experience": "vehicula"
    },
    {
        "id": 12,
        "Experience": "penatibus et"
    },
    {
        "id": 13,
        "Experience": "morbi"
    },
    {
        "id": 14,
        "Experience": "vestibulum"
    },
    {
        "id": 15,
        "Experience": "tellus nisi"
    },
    {
        "id": 16,
        "Experience": "nonummy"
    },
    {
        "id": 17,
        "Experience": "ante ipsum"
    },
    {
        "id": 18,
        "Experience": "ipsum"
    },
    {
        "id": 19,
        "Experience": "semper rutrum"
    },
    {
        "id": 20,
        "Experience": "suscipit a"
    }];



    let experts = [
        {
            id: 1,
            fullname: "Broderic Ollivier",
            skill: "FBA",
            about: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            email: "bollivier0@marketwatch.com",
            phone: "+62 268 962 0322",
        },
        {
            id: 34,
            fullname: "Dmitri Gristhwaite",
            skill: "Occlusion",
            about: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            email: "dgristhwaite1@businesswire.com",
            phone: "+351 433 907 4343",
        },
        {
            id: 9,
            fullname: "Helenelizabeth Le Barr",
            skill: "Airworthiness",
            about: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
            email: "hle2@mit.edu",
            phone: "+46 940 217 1727",
        },
        {
            id: 18,
            fullname: "Emmanuel Anthonies",
            skill: "Security Awareness",
            about: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            email: "eanthonies3@weather.com",
            phone: "+55 773 787 0139",
        },
        {
            id: 5,
            fullname: "Franky January 1st",
            skill: "Spreadsheets",
            about: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            email: "fjanuary4@prlog.org",
            phone: "+375 286 817 7932",
        },
    ];

    let coachings = [
        {
        "id": 1,
        "timeStart": "11:43",
        "timeEnd": "16:45",
        "date": "26.02.2021",
        "id_expert": 5,
        "id_experience": 12
    },
    {
        "id": 2,
        "timeStart": "11:45",
        "timeEnd": "19:03",
        "date": "06.05.2021",
        "id_expert": 34,
        "id_experience": 4
    },
    {
        "id": 3,
        "timeStart": "8:20",
        "timeEnd": "20:05",
        "date": "08.11.2020",
        "id_expert": 9,
        "id_experience": 11
    },
    {
        "id": 4,
        "timeStart": "8:00",
        "timeEnd": "14:09",
        "date": "15.03.2021",
        "id_expert": 18,
        "id_experience": 11
    },
    {
        "id": 5,
        "timeStart": "7:47",
        "timeEnd": "19:45",
        "date": "25.07.2020",
        "id_expert": 1,
        "id_experience": 6
    },
    {
        "id": 6,
        "timeStart": "10:44",
        "timeEnd": "14:00",
        "date": "28.09.2020",
        "id_expert": 5,
        "id_experience": 17
    },
    {
        "id": 7,
        "timeStart": "9:14",
        "timeEnd": "13:28",
        "date": "07.03.2021",
        "id_expert": 34,
        "id_experience": 16
    },
    {
        "id": 8,
        "timeStart": "11:01",
        "timeEnd": "15:28",
        "date": "14.09.2020",
        "id_expert": 9,
        "id_experience": 19
    },
    {
        "id": 9,
        "timeStart": "7:59",
        "timeEnd": "20:23",
        "date": "16.12.2020",
        "id_expert": 5,
        "id_experience": 4
    },
    {
        "id": 10,
        "timeStart": "6:27",
        "timeEnd": "14:43",
        "date": "23.02.2021",
        "id_expert": 18,
        "id_experience": 13
    },
    {
        "id": 11,
        "timeStart": "8:03",
        "timeEnd": "18:59",
        "date": "28.11.2020",
        "id_expert": 34,
        "id_experience": 14
    },
    {
        "id": 12,
        "timeStart": "11:42",
        "timeEnd": "19:34",
        "date": "16.01.2021",
        "id_expert": 9,
        "id_experience": 9
    },
    {
        "id": 13,
        "timeStart": "9:39",
        "timeEnd": "17:33",
        "date": "05.10.2020",
        "id_expert": 18,
        "id_experience": 1
    },
    {
        "id": 14,
        "timeStart": "8:51",
        "timeEnd": "19:49",
        "date": "08.12.2020",
        "id_expert": 1,
        "id_experience": 8
    },
    {
        "id": 15,
        "timeStart": "7:48",
        "timeEnd": "18:18",
        "date": "27.10.2020",
        "id_expert": 5,
        "id_experience": 12
    },
    ];



 /*

   onMount(() => {
        //getExperts();
        getExperiences();
        //getCoachings();
 
    });

    /*
    function getCoachings() {
        axios
            .get( baseUrl + "coachings")
            .then((response) => {
                coachings = response.data;
            });}




                function getExperts() {
        axios
            .get( baseUrl +"experts")
            .then((response) => {
                experts = response.data;
            });
    }

    function getExperiences() {
       axios
           .get(baseUrl +"experiences")
            .then((response) => {
                 experiences = response.data;
            });
    }
    */
    
    function getExperienceById(searchId) {
        let experience = experiences.find((item) => item.id === searchId);

        return experience;
    }

    function getExpertById(searchId) {
        let expert = experts.find((item) => item.id === searchId);

        return expert;
    }

</script>

<h1>List of all coachings</h1>

{#each coachings as coaching}
    <div class="card" style="width: 32rem;">
        <ComponentCoaching
            title={getExperienceById(coaching.id_experience).Experience}
            {coaching}
        />

        <a
            class="btn btn-secondary"
            data-bs-toggle="collapse"
            href={"#ExpertModal" + coaching.id}
            role="button"
            aria-expanded="false"
        >
            About the Expert
        </a>
        <div class="collapse" id={"ExpertModal" + coaching.id}>
            <div class="card card-body">
                <ComponentExpertDetail
                    expert={getExpertById(coaching.id_expert)}
                />
            </div>
        </div>
    </div>
{/each}


