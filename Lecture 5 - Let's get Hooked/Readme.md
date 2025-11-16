## For clean code, we make different files and folder for different components

⭕ We can do it as we wish but the generic norm is that our code should be inside the "src" folder and the other packages should be outside of the 'src' folder.

## Export and Import

⭕ Whenever we use multiple components in a single file, it is very hard to manage and the code looks clumsy , so we make separate components and we export them from the components file and import them into our main code and we can anywhere import the components

⭕ For Eg: after the component code in the last we add => export default COMPONENT_NAME; and then we import like : import COMPONENT_NAME from "COMPONENT_PATH" 

## Types of Import and Export

### ⭕ Default Import and Export : 

Export : When we have only simgle component in a file then we use default export for that component : export default COMPONENT_NAME; 

Import : We directly import it like : import COMPONENT_NAME from "COMPONENT_PATH";

### ⭕ Named Import and Export :

Export : When we have multiple components in a single file and we have to export all of them then we add "export" in the declaration of the components 

For Eg: export const Header = () => {} 
        export const Navbar = () => {}

Import : To import these named exports we use {} for the exact component we want to import

For Eg: import {Header} from "HEADER_PATH";