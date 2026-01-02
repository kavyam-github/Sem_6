#include <stdio.h>
#include <ctype.h>
#include <string.h>

int keyword(char str[])
{
    char *kw[] = {
        "int", "char", "float", "double", "if", "else",
        "for", "while", "return", "void", "main", "printf"
    };

    for (int i = 0; i < 12; i++)
    {
        if (strcmp(str, kw[i]) == 0)
        {
            printf("Keyword : %s\n", str);
            return 1;
        }
    }

    printf("Identifier : %s\n", str);
    return 0;
}

int main()
{
    FILE *f1;
    char c, p;
    char str[100];        
    int num[100], lineno = 0, tokenvalue = 0, i = 0, k = 0;

    f1 = fopen("output.txt", "r");  
    if (!f1)
    {
        printf("File error\n");
        return 1;
    }

    while ((c = getc(f1)) != EOF)
    {
        if (isalpha(c))              
        {
            str[k++] = c;
            c = fgetc(f1);

            while (isdigit(c) || isalpha(c) || c == '_')
            {
                str[k++] = c;
                c = fgetc(f1);
            }

            str[k] = '\0';           

            keyword(str);            

            k = 0;
            str[0] = '\0';

            ungetc(c, f1);         
        }
    }

    fclose(f1);                       
    return 0;
}
