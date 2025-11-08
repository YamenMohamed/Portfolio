export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly REACT = new Tag('React', 'blue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'green');
    static readonly PYTHON = new Tag('Python', 'orange');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'purple');
    static readonly CSS = new Tag('CSS', 'cyan');
    static readonly HTML = new Tag('HTML', 'orange');
    static readonly C = new Tag('C', 'lightgreen');
    static readonly JAVA = new Tag('Java', 'darkgreen');
    static readonly MONGODB = new Tag('MongoDB', 'darkblue');
    static readonly MYSQL = new Tag('MySQL', 'brown');
    static readonly STREAMLIT = new Tag('Streamlit', 'Grey');
    static readonly GO = new Tag('Go', 'teal');
    static readonly DOCKER = new Tag('Docker', 'navy');
    static readonly RPC = new Tag('RPC', 'lightblue');
    private constructor(private readonly key: string,public readonly color: string) {

     }

     toString(): string {
         return this.key;
     }

}