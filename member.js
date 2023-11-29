function skillsMember() {
    return {
        restrict:'E',
        temlateUrl:'modules/skills/views/member.html',
        controller:'SkillsMemberContaroller',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:'='
        }
    };
}