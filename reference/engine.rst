.. _api_Engine:

Engine
======

Inherited: None

.. _api_Engine_description:

Description
-----------

The Engine class is one of the central parts of the Thunder Engine. This class is created first and removed last in your game. It is responsible for many basic functions, such as game cycle, management of game modules, loading and unloading of game resources, work with game settings.



.. _api_Engine_public:

Public Methods
--------------

+--+----------------------------------------+
|  | :ref:`Engine<api_Engine_7d159fe2>` ()  |
+--+----------------------------------------+
|  | :ref:`~Engine<api_Engine_f4e3857a>` () |
+--+----------------------------------------+



.. _api_Engine_static:

Static Methods
--------------

+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`addModule<api_Engine_2ab6e7d4>` (Module * module)                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`applicationName<api_Engine_0c4f3b29>` ()                                                                        |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`applicationVersion<api_Engine_ba28f5c1>` ()                                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Actor<api_Actor>` * | :ref:`composeActor<api_Engine_ae4b9268>` (const TString & component, const TString & name, Object * parent = nullptr) |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`init<api_Engine_79cfab58>` ()                                                                                   |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`isGameMode<api_Engine_b48501ef>` ()                                                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`isResourceExist<api_Engine_31b7ae5d>` (const TString & path)                                                    |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|              :ref:`Resource<api_Resource>` * | :ref:`loadResource<api_Engine_e7d360b5>` (const TString & path)                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|              :ref:`Resource<api_Resource>` * | :ref:`loadResourceAsync<api_Engine_d670c48e>` (const TString & path)                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Scene<api_Scene>` * | :ref:`loadScene<api_Engine_61874a53>` (const TString & path, bool  additive)                                          |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`loadTranslator<api_Engine_4ec2b530>` (const TString & name)                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`locationAppConfig<api_Engine_daf94cb2>` ()                                                                      |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`organizationName<api_Engine_8d71029b>` ()                                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`reference<api_Engine_157a3ec8>` (Object * object)                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`reloadBundle<api_Engine_5270ae68>` ()                                                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`reloadResource<api_Engine_692384a1>` (const TString & path)                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|      :ref:`RenderSystem<api_RenderSystem>` * | :ref:`renderSystem<api_Engine_06b327df>` ()                                                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|  :ref:`ResourceSystem<api_ResourceSystem>` * | :ref:`resourceSystem<api_Engine_95ea410b>` ()                                                                         |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setApplicationName<api_Engine_0ca93416>` (const TString & name)                                                 |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setApplicationVersion<api_Engine_490f362e>` (const TString & version)                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setGameMode<api_Engine_4b6058ec>` (bool  flag)                                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setOrganizationName<api_Engine_5dfcb426>` (const TString & name)                                                |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`setPlatformAdaptor<api_Engine_c4bf5160>` (PlatformAdaptor * platform)                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setValue<api_Engine_e3651a97>` (const TString & key, const Variant & value)                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`start<api_Engine_0ec2bd91>` ()                                                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`syncValues<api_Engine_a9174d5c>` ()                                                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`translate<api_Engine_a52dfb37>` (const TString & source)                                                        |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadAllScenes<api_Engine_042fa93e>` ()                                                                        |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadResource<api_Engine_5d74af8e>` (Resource * resource)                                                      |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadResource<api_Engine_0b96d423>` (const TString & path)                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadScene<api_Engine_e237df85>` (Scene * scene)                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`update<api_Engine_d2a6f70e>` ()                                                                                 |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`Variant<api_Variant>` | :ref:`value<api_Engine_d6b791e5>` (const TString & key, const Variant & defaultValue = Variant())                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`World<api_World>` * | :ref:`world<api_Engine_e96af472>` ()                                                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+

.. _api_Engine_methods:

Methods Description
-------------------

.. _api_Engine_7d159fe2:

**Engine::Engine** ()

Constructs Engine.

----

.. _api_Engine_f4e3857a:

**Engine::~Engine** ()

Destructs Engine, related objects, registered object factories and platform adaptor.

----

.. _api_Engine_2ab6e7d4:

 void **Engine::addModule** (:ref:`Module<api_Module>` * *module*)

Adds a game *module* to pool. This *module* will be used during update() method execution.

Example:

::

    if(engine->init()) {
        Engine::addModule(new RenderGL(engine));
    
        engine->start();
    }

----

.. _api_Engine_0c4f3b29:

 :ref:`TString<api_TString>`  **Engine::applicationName** ()

Returns the name of this application. This name is used to create the path to the settings and logs for this application.

**See also** setApplicationName().

----

.. _api_Engine_ba28f5c1:

 :ref:`TString<api_TString>`  **Engine::applicationVersion** ()

Returns the version of this application.

**See also** setApplicationVersion().

----

.. _api_Engine_ae4b9268:

 :ref:`Actor<api_Actor>` * **Engine::composeActor** (:ref:`TString<api_TString>` & *component*, :ref:`TString<api_TString>` & *name*, :ref:`Object<api_Object>` * *parent* = nullptr)

Creates an Actor with *name* and attached component. Created Actor will be added to the hierarchy of parent. This method helps to create all dependencies for the component.


Warning: This method should be used only in Editor mode.


----

.. _api_Engine_79cfab58:

 bool **Engine::init** ()

Initializes all engine systems. Returns true if successful; otherwise returns false.

----

.. _api_Engine_b48501ef:

 bool **Engine::isGameMode** ()

Returns true if game started; otherwise returns false.

----

.. _api_Engine_31b7ae5d:

 bool **Engine::isResourceExist** (:ref:`TString<api_TString>` & *path*)

Returns true if resource with *path* exists; otherwise returns false.

----

.. _api_Engine_e7d360b5:

 :ref:`Resource<api_Resource>` * **Engine::loadResource** (:ref:`TString<api_TString>` & *path*)

Returns an instance for loading resource by the provided path.


**Note:** In case of resource was loaded previously this function will return the same instance.


**See also** unloadResource().

----

.. _api_Engine_d670c48e:

 :ref:`Resource<api_Resource>` * **Engine::loadResourceAsync** (:ref:`TString<api_TString>` & *path*)

Returns an instance for loading resource by the provided path. The resource will be loaded asynchronously. This means you should check the state of resource before use it.


**Note:** In case of resource was loaded previously this function will return the same instance.


**See also** unloadResource().

----

.. _api_Engine_61874a53:

 :ref:`Scene<api_Scene>` * **Engine::loadScene** (:ref:`TString<api_TString>` & *path*, bool  *additive*)

Loads the scene stored in the .map files by the it's *path* to the Engine.


**Note:** The previous scenes will be not unloaded in the case of an *additive* flag is true.


----

.. _api_Engine_4ec2b530:

 bool **Engine::loadTranslator** (:ref:`TString<api_TString>` & *name*)

Loads translation table with provided file name. This method generates the LanguageChange event for the Engine instance. An Engine instance will propagate the event to all top-level widgets, where reimplementation of event() can re-translate user-visible Strings. Returns true on success; otherwise returns false.

----

.. _api_Engine_daf94cb2:

 :ref:`TString<api_TString>`  **Engine::locationAppConfig** ()

Returns path to application config directory.

----

.. _api_Engine_8d71029b:

 :ref:`TString<api_TString>`  **Engine::organizationName** ()

Returns the name of the organization that wrote this application. This name is used to create the path to the settings and logs for this application.

**See also** setOrganizationName().

----

.. _api_Engine_157a3ec8:

 :ref:`TString<api_TString>`  **Engine::reference** (:ref:`Object<api_Object>` * *object*)

Returns resource path for the provided resource object.

----

.. _api_Engine_5270ae68:

 bool **Engine::reloadBundle** ()

This method reads the index file for the resource bundle. The index file helps to find required game resources. Returns true in case of success; otherwise returns false.

----

.. _api_Engine_692384a1:

 void **Engine::reloadResource** (:ref:`TString<api_TString>` & *path*)

Reloads the resource located along the path.

**See also** loadResource().

----

.. _api_Engine_06b327df:

 :ref:`RenderSystem<api_RenderSystem>` * **Engine::renderSystem** ()

Returns the render system which can be used in external modules.

----

.. _api_Engine_95ea410b:

 :ref:`ResourceSystem<api_ResourceSystem>` * **Engine::resourceSystem** ()

Returns the resource management system which can be used in external modules.

----

.. _api_Engine_0ca93416:

 void **Engine::setApplicationName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of this application.

**See also** applicationName().

----

.. _api_Engine_490f362e:

 void **Engine::setApplicationVersion** (:ref:`TString<api_TString>` & *version*)

Sets the *version* of this application.

**See also** applicationVersion().

----

.. _api_Engine_4b6058ec:

 void **Engine::setGameMode** (bool  *flag*)

Set game *flag* to true if game started; otherwise set false.

**See also** isGameMode().

----

.. _api_Engine_5dfcb426:

 void **Engine::setOrganizationName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of the organization that wrote this application.

**See also** organizationName().

----

.. _api_Engine_c4bf5160:

 bool **Engine::setPlatformAdaptor** (:ref:`PlatformAdaptor<api_PlatformAdaptor>` * *platform*)

Replaces a current *platform* adaptor with new one; Returns true if replacement been succeeded; otherwise returns false.


**Note:** The previous *platform* adaptor will not be deleted.


----

.. _api_Engine_e3651a97:

 void **Engine::setValue** (:ref:`TString<api_TString>` & *key*, :ref:`Variant<api_Variant>` & *value*)

Sets the *value* of setting *key* to value. If the *key* already exists, the previous *value* will be overwritten.

**See also** value().

----

.. _api_Engine_0ec2bd91:

 bool **Engine::start** ()

Starts the main game cycle. Also this method loads the first level of your game. Returns true if successful; otherwise returns false.

----

.. _api_Engine_a9174d5c:

 void **Engine::syncValues** ()

Applies all unsaved settings.

----

.. _api_Engine_a52dfb37:

 :ref:`TString<api_TString>`  **Engine::translate** (:ref:`TString<api_TString>` & *source*)

Returns the translation text for the *source* String.

----

.. _api_Engine_042fa93e:

 void **Engine::unloadAllScenes** ()

Unloads all scenes from the World.

----

.. _api_Engine_5d74af8e:

 void **Engine::unloadResource** (:ref:`Resource<api_Resource>` * *resource*)

Forcely unloads the *resource* from memory.


Warning: After this call, the reference on the *resource* may become an invalid at any time and must not be used anymore.


**See also** loadResource().

----

.. _api_Engine_0b96d423:

 void **Engine::unloadResource** (:ref:`TString<api_TString>` & *path*)

Forcely unloads the resource located along the *path* from memory.


Warning: After this call, the reference on the resource may become an invalid at any time and must not be used anymore.


**See also** loadResource().

----

.. _api_Engine_e237df85:

 void **Engine::unloadScene** (:ref:`Scene<api_Scene>` * *scene*)

Unloads the *scene* from the World.

----

.. _api_Engine_d2a6f70e:

 void **Engine::update** ()

This method launches all your game modules responsible for processing all the game logic. It calls on each iteration of the game cycle.


**Note:** Usually, this method calls internally and must not be called manually.


----

.. _api_Engine_d6b791e5:

 :ref:`Variant<api_Variant>`  **Engine::value** (:ref:`TString<api_TString>` & *key*, :ref:`Variant<api_Variant>` & *defaultValue* = Variant())

Returns the value for setting key. If the setting doesn't exist, returns defaultValue.

**See also** setValue().

----

.. _api_Engine_e96af472:

 :ref:`World<api_World>` * **Engine::world** ()

Returns game World.


**Note:** The game can have only one scene graph. World is a root object, all map loads on this World.



