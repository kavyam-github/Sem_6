#include <stdio.h>

int main()
{
    FILE *f1, *f2;
    char c, p;

    f1 = fopen("input.txt", "r");
    f2 = fopen("output.txt", "w");

    if (!f1 || !f2)
    {
        printf("File error\n");
        return 1;
    }

    while ((c = fgetc(f1)) != EOF)
    {
        if (c == '/')
        {
            char next = fgetc(f1);

            
            if (next == '/')
            {
                while ((c = fgetc(f1)) != EOF && c != '\n');
                printf("Single line comment ignored\n");
                fputc('\n', f2);
            }

           
            else if (next == '*')
            {
                do
                {
                    p = next;
                    next = fgetc(f1);
                } while (!(p == '*' && next == '/'));

                printf("Multi-line comment ignored\n");
            }

            
            else
            {
                fputc('/', f2);
                fputc(next, f2);
            }
        }
        else
        {
          
            fputc(c, f2);
        }
    }

    fclose(f1);
    fclose(f2);
    return 0;
}
