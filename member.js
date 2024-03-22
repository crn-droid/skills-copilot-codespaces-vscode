function skillsMember(){
    return {
        restrict:'E',
        templateUrl:'modules/skills/views/member.html',
        controller:'skillsMemberCOntroller',
        controllerAs:'vm',
        bindTOController:true,
        scope: {
            member: '='
        }
    };
}
