export interface ITechnology {
    displayName: string,
    iconPath: string | undefined,
    source: string | undefined,
}

export class Technology implements ITechnology {
    displayName: string;
    iconPath: string | undefined;
    source: string | undefined;

    /**
     * @displayName: Name of the technology which will be displayed
     * @iconPath: Relative technology path - /images/technologies/$iconPath
     * @source: Source of the technology - like their website
     * **/
    private constructor(displayName: string, iconPath?: string, source?: string) {
        this.displayName = displayName;
        this.iconPath = this.getIconPath(iconPath!);
        this.source = source;
    }

    public isGlobalTechnology = (): boolean =>
        this.displayName === "FRONT-END" || this.displayName === "BACK-END";

    private getIconPath = (path: string) => `/images/technologies/${path}`;

    static readonly ALL = new Technology("WSZYSTKIE");

    static readonly FRONTEND = new Technology("FRONT-END", "frontend");
    static readonly BACKEND = new Technology("BACK-END", "backend");

    /** LANGUAGES AND ENVIRONMENTS **/

   /* static readonly NODEJS = new Technology("NODE.JS", "nodejs.png", "https://nodejs.org/");*/
    static readonly JAVA = new Technology("JAVA", "java.png", "https://www.java.com/");
    static readonly TYPESCRIPT = new Technology("TYPESCRIPT", "typescript.png", "https://www.typescriptlang.org/");
    static readonly KOTLIN = new Technology("KOTLIN", "kotlin.png", "https://kotlinlang.org/");
    /*static readonly PHP = new Technology("PHP", "php.png", "https://www.php.net/");*/

    /** DATABASES **/

    static readonly MONGODB = new Technology("MONGODB", "mongodb.svg", "https://www.mongodb.com/");
    /*static readonly MYSQL = new Technology("MYSQL", "mysql.png", "https://www.mysql.com/");*/

    /** FRAMEWORKS **/

    static readonly SPRING = new Technology("SPRING", "spring.svg", "https://spring.io/");
    static readonly REACT = new Technology("REACT", "react.png", "https://reactjs.org/");
    static readonly JQUERY = new Technology("JQUERY", "jquery.png", "https://jquery.com/");
    static readonly BOOTSTRAP = new Technology("BOOTSTRAP", "bootstrap.png", "https://getbootstrap.com/");
    static readonly ANDROID = new Technology("ANDROID", "android.png", "https://developer.android.com/")

    /** OTHER **/

    static readonly SPIGOT = new Technology("SPIGOT", "spigot.png", "https://hub.spigotmc.org/javadocs/spigot/");
    static readonly FIREBASE = new Technology("FIREBASE", "firebase.png", "https://firebase.google.com/");
    static readonly AWS = new Technology("AWS", "aws.svg", "https://aws.amazon.com/");
}
