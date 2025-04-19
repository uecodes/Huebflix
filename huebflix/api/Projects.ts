import projects from '../data/projects.json';

export const CategoricElements = (category: string) => {
    console.log(projects.projects);
    const filtered = projects.projects.filter((proj: any) => proj.tags.includes(category));
    return filtered;
}

export const fetchProject = async (id: string) => {
    const project = projects.projects.find((proj: any) => proj.id === id);
    return project;
}

export const fetchEpisodes = async (id: string) => {
    return [
        {
            id: "_oDkGWcDJ0Q",
            title: "Episode 1"
        },
        {
            id: "Ncr--dZRp2M",
            title: "Episode 2"
        },
        {
            id: "P0KgPHFbrmQ",
            title: "Episode 3"
        },
        {
            id: "1BPX1Qv2Brg",
            title: "Episode 4"
        },
        {
            id: "SkGzlGjA3a0",
            title: "Episode 5"
        },
        {
            id: "Qb8wYxyh8vo",
            title: "Episode 6"
        },
        {
            id: "5b2YangHSpY",
            title: "Episode 7"
        },
        {
            id: "beR7S8GOpXU",
            title: "Episode 8"
        },
        {
            id: "kda2oBGjTQo",
            title: "Episode 9"
        },
        {
            id: "qujhYvDBqmA",
            title: "Episode 10"
        }
    ]
}