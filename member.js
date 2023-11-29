function skillsMember() {
    return {
        restrict:'E',
        temlateUrl:'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:'='
        }
    };
}