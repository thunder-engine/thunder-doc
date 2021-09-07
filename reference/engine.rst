.. _api_Engine:
Engine Class
================

Inherited: :ref:`ObjectSystem<api_ObjectSystem>`

.. _api_Engine_description:
Description
-----------

The Engine one of the central parts of Thunder Engine.

The Engine class is one of the central parts of the Thunder Engine. This class is created first and removed last in your game. It is responsible for many basic functions, such as game cycle, management of game modules, loading and unloading of game resources, work with game settings.



.. _api_Engine_public:
Public Methods
--------------

+-------------------------------------+-------------------------------------------------------------------+
|                                     | :ref:`Engine<api_Engine_Engine>` (File * file, const char * path) |
+-------------------------------------+-------------------------------------------------------------------+
|                                     | :ref:`~Engine<api_Engine_~Engine>` ()                             |
+-------------------------------------+-------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`addModule<api_Engine_addModule>` (Module * module)          |
+-------------------------------------+-------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`applicationName<api_Engine_applicationName>` () const       |
+-------------------------------------+-------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`init<api_Engine_init>` ()                                   |
+-------------------------------------+-------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`organizationName<api_Engine_organizationName>` () const     |
+-------------------------------------+-------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`resize<api_Engine_resize>` ()                               |
+-------------------------------------+-------------------------------------------------------------------+
|           :ref:`Scene<api_Scene>` * | :ref:`scene<api_Engine_scene>` ()                                 |
+-------------------------------------+-------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`start<api_Engine_start>` ()                                 |
+-------------------------------------+-------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`update<api_Engine_update>` (Scene * scene)                  |
+-------------------------------------+-------------------------------------------------------------------+



.. _api_Engine_static:
Static Methods
--------------

+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|           :ref:`Actor<api_Actor>` * | :ref:`composeActor<api_Engine_composeActor>` (const std::string & component, const std::string & name, Object * parent = nullptr) |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`File<api_File>` * | :ref:`file<api_Engine_file>` ()                                                                                                   |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`isGameMode<api_Engine_isGameMode>` ()                                                                                       |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`isResourceExist<api_Engine_isResourceExist>` (const std::string & path)                                                     |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|         :ref:`Object<api_Object>` * | :ref:`loadResource<api_Engine_loadResource>` (const std::string & path)                                                           |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`loadTranslator<api_Engine_loadTranslator>` (const std::string & name)                                                       |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`locationAppConfig<api_Engine_locationAppConfig>` ()                                                                         |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`locationAppDir<api_Engine_locationAppDir>` ()                                                                               |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`reference<api_Engine_reference>` (Object * object)                                                                          |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`reloadBundle<api_Engine_reloadBundle>` ()                                                                                   |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`reloadResource<api_Engine_reloadResource>` (const std::string & path)                                                       |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|         :ref:`System<api_System>` * | :ref:`resourceSystem<api_Engine_resourceSystem>` ()                                                                               |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setGameMode<api_Engine_setGameMode>` (bool  flag)                                                                           |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setPlatformAdaptor<api_Engine_setPlatformAdaptor>` (PlatformAdaptor * platform)                                             |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setResource<api_Engine_setResource>` (Object * object, const std::string & uuid)                                            |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setValue<api_Engine_setValue>` (const std::string & key, const Variant & value)                                             |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`syncValues<api_Engine_syncValues>` ()                                                                                       |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`translate<api_Engine_translate>` (const std::string & source)                                                               |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`unloadResource<api_Engine_unloadResource>` (const std::string & path)                                                       |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|         :ref:`Variant<api_Variant>` | :ref:`value<api_Engine_value>` (const std::string & key, const Variant & defaultValue = Variant())                                |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+

.. _api_Engine_methods:
Methods Description
-------------------

.. _api_Engine_Engine:

**Engine::Engine** (:ref:`File<api_File>` * *file*, :ref:`char<api_char>` * *path*)

Constructs Engine. Using *file* and *path* parameters creates necessary platform adapters, register basic component types and resource types.

----

.. _api_Engine_~Engine:

**Engine::~Engine** ()

Destructs Engine, related objects, registered object factories and platform adaptor.

----

.. _api_Engine_addModule:

:ref:`void<api_void>`  **Engine::addModule** (:ref:`Module<api_Module>` * *module*)

Adds a game *module* to pool. This *module* will be used during update() method execution.

Example:

::

    if(engine->init()) {
        engine->addModule(new RenderGL(engine));
    
        engine->start();
    }

----

.. _api_Engine_applicationName:

:ref:`std::string<api_std::string>`  **Engine::applicationName** () const

Returns application name.

----

.. _api_Engine_composeActor:

:ref:`Actor<api_Actor>` * **Engine::composeActor** (:ref:`std::string<api_std::string>` & *component*, :ref:`std::string<api_std::string>` & *name*, :ref:`Object<api_Object>` * *parent* = nullptr)

Creates an Actor with *name* and attached *component*. Created Actor will be added to the hierarchy of *parent*. This method helps to create all dependencies for the *component*.

Warning: This method should be used only in Editor mode.

----

.. _api_Engine_file:

:ref:`File<api_File>` * **Engine::file** ()

Returns file system module.

----

.. _api_Engine_init:

:ref:`bool<api_bool>`  **Engine::init** ()

Initializes all engine systems. Returns true if successful; otherwise returns false.

----

.. _api_Engine_isGameMode:

:ref:`bool<api_bool>`  **Engine::isGameMode** ()

Returns true if game started; otherwise returns false.

----

.. _api_Engine_isResourceExist:

:ref:`bool<api_bool>`  **Engine::isResourceExist** (:ref:`std::string<api_std::string>` & *path*)

Returns true if resource with *path* exists; otherwise returns false.

----

.. _api_Engine_loadResource:

:ref:`Object<api_Object>` * **Engine::loadResource** (:ref:`std::string<api_std::string>` & *path*)

Returns an instance for loading resource by the provided *path*.

**Note:** In case of resource was loaded previously this function will return the same instance.

**See also** unloadResource().

----

.. _api_Engine_loadTranslator:

:ref:`bool<api_bool>`  **Engine::loadTranslator** (:ref:`std::string<api_std::string>` & *name*)

Loads translation table with provided file *name*. This method generates the LanguageChange event for the Engine instance. An Engine instance will propagate the event to all top-level widgets, where reimplementation of event() can re-translate user-visible strings. Returns true on success; otherwise returns false.

----

.. _api_Engine_locationAppConfig:

:ref:`std::string<api_std::string>`  **Engine::locationAppConfig** ()

Returns path to application config directory.

----

.. _api_Engine_locationAppDir:

:ref:`std::string<api_std::string>`  **Engine::locationAppDir** ()

Returns path to application binary directory.

----

.. _api_Engine_organizationName:

:ref:`std::string<api_std::string>`  **Engine::organizationName** () const

Returns organization name.

----

.. _api_Engine_reference:

:ref:`std::string<api_std::string>`  **Engine::reference** (:ref:`Object<api_Object>` * *object*)

Returns resource path for the provided resource *object*.

**See also** setResource().

----

.. _api_Engine_reloadBundle:

:ref:`bool<api_bool>`  **Engine::reloadBundle** ()

This method reads the index file for the resource bundle. The index file helps to find required game resources. Returns true in case of success; otherwise returns false.

----

.. _api_Engine_reloadResource:

:ref:`void<api_void>`  **Engine::reloadResource** (:ref:`std::string<api_std::string>` & *path*)

Reloads the resource located along the *path*.

**See also** loadResource().

----

.. _api_Engine_resize:

:ref:`void<api_void>`  **Engine::resize** ()

This method must be called each time when your game screen changes its size.

**Note:** Usually, this method calls internally and must not be called manually.

----

.. _api_Engine_resourceSystem:

:ref:`System<api_System>` * **Engine::resourceSystem** ()

Returns the resource management system which can be used in external modules.

----

.. _api_Engine_scene:

:ref:`Scene<api_Scene>` * **Engine::scene** ()

Returns game Scene.

**Note:** The game can have only one scene. Scene is a root object, all map loads on this scene.

----

.. _api_Engine_setGameMode:

:ref:`void<api_void>`  **Engine::setGameMode** (:ref:`bool<api_bool>`  *flag*)

Set game *flag* to true if game started; otherwise set false.

**See also** isGameMode().

----

.. _api_Engine_setPlatformAdaptor:

:ref:`void<api_void>`  **Engine::setPlatformAdaptor** (:ref:`PlatformAdaptor<api_PlatformAdaptor>` * *platform*)

Replaces a current *platform* adaptor with new one;

**Note:** The previous one will not be deleted.

----

.. _api_Engine_setResource:

:ref:`void<api_void>`  **Engine::setResource** (:ref:`Object<api_Object>` * *object*, :ref:`std::string<api_std::string>` & *uuid*)

Register resource *object* by *uuid* path.

**See also** setResource().

----

.. _api_Engine_setValue:

:ref:`void<api_void>`  **Engine::setValue** (:ref:`std::string<api_std::string>` & *key*, :ref:`Variant<api_Variant>` & *value*)

Sets the *value* of setting *key* to *value*. If the *key* already exists, the previous *value* will be overwritten.

**See also** *value*().

----

.. _api_Engine_start:

:ref:`bool<api_bool>`  **Engine::start** ()

Starts the main game cycle. Also this method loads the first level of your game. Returns true if successful; otherwise returns false.

----

.. _api_Engine_syncValues:

:ref:`void<api_void>`  **Engine::syncValues** ()

Applies all unsaved settings.

----

.. _api_Engine_translate:

:ref:`std::string<api_std::string>`  **Engine::translate** (:ref:`std::string<api_std::string>` & *source*)

Returns the translation text for the *source* string.

----

.. _api_Engine_unloadResource:

:ref:`void<api_void>`  **Engine::unloadResource** (:ref:`std::string<api_std::string>` & *path*)

Force unloads the resource located along the *path* from memory.

Warning: After this call, the reference on the resource may become an invalid at any time and must not be used anymore.

**See also** loadResource().

----

.. _api_Engine_update:

:ref:`void<api_void>`  **Engine::update** (:ref:`Scene<api_Scene>` * *scene*)

This method launches all your game modules responsible for processing all the game logic. It calls on each iteration of the game cycle for the provided *scene*.

**Note:** Usually, this method calls internally and must not be called manually.

----

.. _api_Engine_value:

:ref:`Variant<api_Variant>`  **Engine::value** (:ref:`std::string<api_std::string>` & *key*, :ref:`Variant<api_Variant>` & *defaultValue* = Variant())

Returns the value for setting *key*. If the setting doesn't exist, returns *defaultValue*.

**See also** setValue().

----


