# Tutos-System

<h2 align="center">Tuto's System</h2>
<h3 align="center">Proyecto UVG Ingeniería de Software</h3>

## Configuración de entorno

* [Instalar Python](https://www.python.org/)
* [Instalar Postgres](https://www.postgresql.org/)
* Instalar Python Environment
    ```shell
    $ sudo apt install python3-env
    ```
* Clonar repo
* Crear, activar y desactivar python env
    ```shell
    $ python3 -m venv venv
    $ source venv/bin/activate
    $ deactivate
    ```
* [Instalar Django](https://docs.djangoproject.com/en/3.0/topics/install/)
    ```shell
    $ python -m pip install Django
    ```
* [Instalar psycopg2](https://www.psycopg.org/)
    * Instalar y comprobar instalación
    ```shell
    $ pip install psycopg2
    $ python -c "import psycopg2" --verbose
    ```
* Instalar ipython 
    ```shell
    $ pip install ipython
    ```

## Configuración de Base de Datos

* Conexión a Interfaz Postgres
    ```shell
    $ psql -h localhost -U postgres -W
    ```

* Crear archivo /tutos/credentials.py
    ```python
        DEVELOPMENT_DATABASE = {
            'NAME': 'tutos_dev_db',
            'USER': 'tu-usuario',
            'PASSWORD': 'tu-contraseña',
            'HOST': 'tu-host',
            'PORT': 'tu-puerto',
        }
    ```

* Resetear db y cargar data
    ```shell
    $ python load_data.py
    ```

## Desarrollo

* Run Server
    ```shell
    $ python manage.py runserver
    ```
* Crear project y app
    ```shell
    $ django-admin startproject tutos
    $ python manage.py startapp myapp
    ```
* Abrir shell
    ```shell
    $ python manage.py shell
    ```
