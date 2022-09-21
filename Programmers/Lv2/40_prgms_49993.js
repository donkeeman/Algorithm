function solution(skill, skill_trees) {
    return skill_trees
        .map((skill_tree) =>
            skill_tree
                .split("")
                .filter((skills) => skill.includes(skills))
                .join("")
        )
        .filter((skill_tree) => skill.indexOf(skill_tree) === 0)
        .length;
}