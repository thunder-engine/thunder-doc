.. _api_Engine:

Engine
======

Inherited: :doc:`ObjectSystem<api_ObjectSystem>`

.. _api_Engine_description:

Description
-----------

The Engine class is one of the central parts of the Thunder Engine. This class is created first and removed last in your game. It is responsible for many basic functions, such as game cycle, management of game modules, loading and unloading of game resources, work with game settings.



.. _api_Engine_public:

Public Methods
--------------

+--+-------------------------------------------------------------------+
|  | :ref:`Engine<api_Engine_Engine>` (File * file, const char * path) |
+--+-------------------------------------------------------------------+
|  | :ref:`~Engine<api_Engine_~Engine>` ()                             |
+--+-------------------------------------------------------------------+



.. _api_Engine_static:

Static Methods
--------------

+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`addModule<api_Engine_addModule>` (Module * module)                                                                          |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                  std::string | :ref:`applicationName<api_Engine_applicationName>` ()                                                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Actor<api_Actor>` * | :ref:`composeActor<api_Engine_composeActor>` (const std::string & component, const std::string & name, Object * parent = nullptr) |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                      :ref:`File<api_File>` * | :ref:`file<api_Engine_file>` ()                                                                                                   |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`init<api_Engine_init>` ()                                                                                                   |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`isGameMode<api_Engine_isGameMode>` ()                                                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`isResourceExist<api_Engine_isResourceExist>` (const std::string & path)                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                  :ref:`Object<api_Object>` * | :ref:`loadResource<api_Engine_loadResource>` (const std::string & path)                                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Scene<api_Scene>` * | :ref:`loadScene<api_Engine_loadScene>` (const std::string & path, bool  additive)                                                 |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`loadTranslator<api_Engine_loadTranslator>` (const std::string & name)                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                  std::string | :ref:`locationAppConfig<api_Engine_locationAppConfig>` ()                                                                         |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                  std::string | :ref:`locationAppDir<api_Engine_locationAppDir>` ()                                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                  std::string | :ref:`organizationName<api_Engine_organizationName>` ()                                                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                  std::string | :ref:`reference<api_Engine_reference>` (Object * object)                                                                          |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`reloadBundle<api_Engine_reloadBundle>` ()                                                                                   |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`reloadResource<api_Engine_reloadResource>` (const std::string & path)                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|      :ref:`RenderSystem<api_RenderSystem>` * | :ref:`renderSystem<api_Engine_renderSystem>` ()                                                                                   |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`ResourceSystem<api_ResourceSystem>` * | :ref:`resourceSystem<api_Engine_resourceSystem>` ()                                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setGameMode<api_Engine_setGameMode>` (bool  flag)                                                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setPlatformAdaptor<api_Engine_setPlatformAdaptor>` (PlatformAdaptor * platform)                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setResource<api_Engine_setResource>` (Object * object, const std::string & uuid)                                            |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setValue<api_Engine_setValue>` (const std::string & key, const Variant & value)                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`start<api_Engine_start>` ()                                                                                                 |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`syncValues<api_Engine_syncValues>` ()                                                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                  std::string | :ref:`translate<api_Engine_translate>` (const std::string & source)                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadAllScenes<api_Engine_unloadAllScenes>` ()                                                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadResource<api_Engine_unloadResource>` (const std::string & path)                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadResource<api_Engine_unloadResource>` (Resource * resource)                                                            |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadScene<api_Engine_unloadScene>` (Scene * scene)                                                                        |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`update<api_Engine_update>` ()                                                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                  :ref:`Variant<api_Variant>` | :ref:`value<api_Engine_value>` (const std::string & key, const Variant & defaultValue = Variant())                                |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                    :ref:`World<api_World>` * | :ref:`world<api_Engine_world>` ()                                                                                                 |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+

.. _api_Engine_methods:

Methods Description
-------------------

.. _api_Engine_Engine:

**Engine::Engine** (:ref:`File<api_File>` * *file*, char * *path*)

Constructs Engine. Using *file* and *path* parameters creates necessary platform adapters, register basic component types and resource types.

----

.. _api_Engine_~Engine:

**Engine::~Engine** ()

Destructs Engine, related objects, registered object factories and platform adaptor.

----

.. _api_Engine_addModule:

 void **Engine::addModule** (:ref:`Module<api_Module>` * *module*)

Adds a game *module* to pool. This *module* will be used during update() method execution.

Example:

::

    if(engine->init()) {
        engine->addModule(new RenderGL(engine));
    
        engine->start();
    }

----

.. _api_Engine_applicationName:

 std::string **Engine::applicationName** ()

Returns application name.

----

.. _api_Engine_composeActor:

 :ref:`Actor<api_Actor>`* **Engine::composeActor** (std::string & *component*, std::string & *name*, :ref:`Object<api_Object>` * *parent* = nullptr)

Creates an Actor with *name* and attached *component*. Created Actor will be added to the hierarchy of *parent*. This method helps to create all dependencies for the *component*.

Warning: This method should be used only in Editor mode.

----

.. _api_Engine_file:

 :ref:`File<api_File>`* **Engine::file** ()

Returns file system module.

----

.. _api_Engine_init:

 bool **Engine::init** ()

Initializes all engine systems. Returns true if successful; otherwise returns false.

----

.. _api_Engine_isGameMode:

 bool **Engine::isGameMode** ()

Returns true if game started; otherwise returns false.

----

.. _api_Engine_isResourceExist:

 bool **Engine::isResourceExist** (std::string & *path*)

Returns true if resource with *path* exists; otherwise returns false.

----

.. _api_Engine_loadResource:

 :ref:`Object<api_Object>`* **Engine::loadResource** (std::string & *path*)

Returns an instance for loading resource by the provided *path*.

**Note:** In case of resource was loaded previously this function will return the same instance.

**See also** unloadResource().

----

.. _api_Engine_loadScene:

 :ref:`Scene<api_Scene>`* **Engine::loadScene** (std::string & *path*, bool  *additive*)

Loads the scene stored in the .map files by the it's *path* to the Engine.

**Note:** The previous scenes will be not unloaded in the case of an *additive* flag is true.

----

.. _api_Engine_loadTranslator:

 bool **Engine::loadTranslator** (std::string & *name*)

Loads translation table with provided file *name*. This method generates the LanguageChange event for the Engine instance. An Engine instance will propagate the event to all top-level widgets, where reimplementation of event() can re-translate user-visible strings. Returns true on success; otherwise returns false.

----

.. _api_Engine_locationAppConfig:

 std::string **Engine::locationAppConfig** ()

Returns path to application config directory.

----

.. _api_Engine_locationAppDir:

 std::string **Engine::locationAppDir** ()

Returns path to application binary directory.

----

.. _api_Engine_organizationName:

 std::string **Engine::organizationName** ()

Returns organization name.

----

.. _api_Engine_reference:

 std::string **Engine::reference** (:ref:`Object<api_Object>` * *object*)

Returns resource path for the provided resource *object*.

**See also** setResource().

----

.. _api_Engine_reloadBundle:

 bool **Engine::reloadBundle** ()

This method reads the index file for the resource bundle. The index file helps to find required game resources. Returns true in case of success; otherwise returns false.

----

.. _api_Engine_reloadResource:

 void **Engine::reloadResource** (std::string & *path*)

Reloads the resource located along the *path*.

**See also** loadResource().

----

.. _api_Engine_renderSystem:

 :ref:`RenderSystem<api_RenderSystem>`* **Engine::renderSystem** ()

Returns the render system which can be used in external modules.

----

.. _api_Engine_resourceSystem:

 :ref:`ResourceSystem<api_ResourceSystem>`* **Engine::resourceSystem** ()

Returns the resource management system which can be used in external modules.

----

.. _api_Engine_setGameMode:

 void **Engine::setGameMode** (bool  *flag*)

Set game *flag* to true if game started; otherwise set false.

**See also** isGameMode().

----

.. _api_Engine_setPlatformAdaptor:

 void **Engine::setPlatformAdaptor** (:ref:`PlatformAdaptor<api_PlatformAdaptor>` * *platform*)

Replaces a current *platform* adaptor with new one;

**Note:** The previous one will not be deleted.

----

.. _api_Engine_setResource:

 void **Engine::setResource** (:ref:`Object<api_Object>` * *object*, std::string & *uuid*)

Register resource *object* by *uuid* path.

**See also** setResource().

----

.. _api_Engine_setValue:

 void **Engine::setValue** (std::string & *key*, :ref:`Variant<api_Variant>` & *value*)

Sets the *value* of setting *key* to *value*. If the *key* already exists, the previous *value* will be overwritten.

**See also** *value*().

----

.. _api_Engine_start:

 bool **Engine::start** ()

Starts the main game cycle. Also this method loads the first level of your game. Returns true if successful; otherwise returns false.

----

.. _api_Engine_syncValues:

 void **Engine::syncValues** ()

Applies all unsaved settings.

----

.. _api_Engine_translate:

 std::string **Engine::translate** (std::string & *source*)

Returns the translation text for the *source* string.

----

.. _api_Engine_unloadAllScenes:

 void **Engine::unloadAllScenes** ()

Unloads all scenes from the World.

----

.. _api_Engine_unloadResource:

 void **Engine::unloadResource** (std::string & *path*)

Forcely unloads the resource located along the *path* from memory.

Warning: After this call, the reference on the resource may become an invalid at any time and must not be used anymore.

**See also** loadResource().

----

.. _api_Engine_unloadResource:

 void **Engine::unloadResource** (:ref:`Resource<api_Resource>` * *resource*)

Forcely unloads the *resource* from memory.

Warning: After this call, the reference on the *resource* may become an invalid at any time and must not be used anymore.

**See also** loadResource().

----

.. _api_Engine_unloadScene:

 void **Engine::unloadScene** (:ref:`Scene<api_Scene>` * *scene*)

Unloads the *scene* from the World.

----

.. _api_Engine_update:

 void **Engine::update** ()

This method launches all your game modules responsible for processing all the game logic. It calls on each iteration of the game cycle.

**Note:** Usually, this method calls internally and must not be called manually.

----

.. _api_Engine_value:

 :ref:`Variant<api_Variant>` **Engine::value** (std::string & *key*, :ref:`Variant<api_Variant>` & *defaultValue* = Variant())

Returns the value for setting *key*. If the setting doesn't exist, returns *defaultValue*.

**See also** setValue().

----

.. _api_Engine_world:

 :ref:`World<api_World>`* **Engine::world** ()

Returns game World.

**Note:** The game can have only one scene graph. World is a root object, all map loads on this World.


