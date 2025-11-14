/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
 

namespace App {
    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished'); 
}
