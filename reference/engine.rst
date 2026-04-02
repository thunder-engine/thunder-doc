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
|  | :ref:`Engine<api_Engine_04a935c8>` ()  |
+--+----------------------------------------+
|  | :ref:`~Engine<api_Engine_8267c903>` () |
+--+----------------------------------------+



.. _api_Engine_static:

Static Methods
--------------

+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`addModule<api_Engine_5cbda86f>` (Module * module)                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`applicationName<api_Engine_38ca25f1>` ()                                                                        |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`applicationVersion<api_Engine_6498fa35>` ()                                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Actor<api_Actor>` * | :ref:`composeActor<api_Engine_201eb83f>` (const TString & component, const TString & name, Object * parent = nullptr) |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`init<api_Engine_3c76f8e0>` ()                                                                                   |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`isGameMode<api_Engine_739dfeca>` ()                                                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`isResourceExist<api_Engine_3fc16a87>` (const TString & path)                                                    |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|              :ref:`Resource<api_Resource>` * | :ref:`loadResource<api_Engine_7dc8f250>` (const TString & path)                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|              :ref:`Resource<api_Resource>` * | :ref:`loadResourceAsync<api_Engine_5da79830>` (const TString & path)                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Scene<api_Scene>` * | :ref:`loadScene<api_Engine_10f5239c>` (const TString & path, bool  additive)                                          |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`loadTranslator<api_Engine_0b34e7ac>` (const TString & name)                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`locationAppConfig<api_Engine_1b538fc6>` ()                                                                      |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`organizationName<api_Engine_9451ed23>` ()                                                                       |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`reference<api_Engine_d6159240>` (Object * object)                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`reloadBundle<api_Engine_46e7d5f2>` ()                                                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`reloadResource<api_Engine_892650d7>` (const TString & path)                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|      :ref:`RenderSystem<api_RenderSystem>` * | :ref:`renderSystem<api_Engine_6cf9ea35>` ()                                                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|  :ref:`ResourceSystem<api_ResourceSystem>` * | :ref:`resourceSystem<api_Engine_5e7f94bc>` ()                                                                         |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setApplicationName<api_Engine_bc863dfe>` (const TString & name)                                                 |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setApplicationVersion<api_Engine_5e28cfd1>` (const TString & version)                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setGameMode<api_Engine_91cfb50d>` (bool  flag)                                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setOrganizationName<api_Engine_a08c6943>` (const TString & name)                                                |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`setPlatformAdaptor<api_Engine_437f8d92>` (PlatformAdaptor * platform)                                           |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setValue<api_Engine_1f763c0d>` (const TString & key, const Variant & value)                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`start<api_Engine_2a76c915>` ()                                                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`syncValues<api_Engine_487fdc6e>` ()                                                                             |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`TString<api_TString>` | :ref:`translate<api_Engine_259c4f6e>` (const TString & source)                                                        |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadAllScenes<api_Engine_1a47eb95>` ()                                                                        |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadResource<api_Engine_f9675148>` (Resource * resource)                                                      |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadResource<api_Engine_3789bc0e>` (const TString & path)                                                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unloadScene<api_Engine_2134de0b>` (Scene * scene)                                                               |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`update<api_Engine_0ac3fb47>` ()                                                                                 |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                  :ref:`Variant<api_Variant>` | :ref:`value<api_Engine_21e5b436>` (const TString & key, const Variant & defaultValue = Variant())                     |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`World<api_World>` * | :ref:`world<api_Engine_6405bdc8>` ()                                                                                  |
+----------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+

.. _api_Engine_methods:

Methods Description
-------------------

.. _api_Engine_04a935c8:

**Engine::Engine** ()

Constructs Engine.

----

.. _api_Engine_8267c903:

**Engine::~Engine** ()

Destructs Engine, related objects, registered object factories and platform adaptor.

----

.. _api_Engine_5cbda86f:

 void **Engine::addModule** (:ref:`Module<api_Module>` * *module*)

Adds a game *module* to pool. This *module* will be used during update() method execution.

Example:

::

    if(engine->init()) {
        Engine::addModule(new RenderGL(engine));
    
        engine->start();
    }

----

.. _api_Engine_38ca25f1:

 :ref:`TString<api_TString>`  **Engine::applicationName** ()

Returns the name of this application. This name is used to create the path to the settings and logs for this application.

**See also** setApplicationName().

----

.. _api_Engine_6498fa35:

 :ref:`TString<api_TString>`  **Engine::applicationVersion** ()

Returns the version of this application.

**See also** setApplicationVersion().

----

.. _api_Engine_201eb83f:

 :ref:`Actor<api_Actor>` * **Engine::composeActor** (:ref:`TString<api_TString>` & *component*, :ref:`TString<api_TString>` & *name*, :ref:`Object<api_Object>` * *parent* = nullptr)

Creates an Actor with *name* and attached *component*. Created Actor will be added to the hierarchy of *parent*. This method helps to create all dependencies for the *component*.


Warning: This method should be used only in Editor mode.


----

.. _api_Engine_3c76f8e0:

 bool **Engine::init** ()

Initializes all engine systems. Returns true if successful; otherwise returns false.

----

.. _api_Engine_739dfeca:

 bool **Engine::isGameMode** ()

Returns true if game started; otherwise returns false.

----

.. _api_Engine_3fc16a87:

 bool **Engine::isResourceExist** (:ref:`TString<api_TString>` & *path*)

Returns true if resource with *path* exists; otherwise returns false.

----

.. _api_Engine_7dc8f250:

 :ref:`Resource<api_Resource>` * **Engine::loadResource** (:ref:`TString<api_TString>` & *path*)

Returns an instance for loading resource by the provided *path*.


**Note:** In case of resource was loaded previously this function will return the same instance.


**See also** unloadResource().

----

.. _api_Engine_5da79830:

 :ref:`Resource<api_Resource>` * **Engine::loadResourceAsync** (:ref:`TString<api_TString>` & *path*)

Returns an instance for loading resource by the provided *path*. The resource will be loaded asynchronously. This means you should check the state of resource before use it.


**Note:** In case of resource was loaded previously this function will return the same instance.


**See also** unloadResource().

----

.. _api_Engine_10f5239c:

 :ref:`Scene<api_Scene>` * **Engine::loadScene** (:ref:`TString<api_TString>` & *path*, bool  *additive*)

Loads the scene stored in the .map files by the it's *path* to the Engine.


**Note:** The previous scenes will be not unloaded in the case of an *additive* flag is true.


----

.. _api_Engine_0b34e7ac:

 bool **Engine::loadTranslator** (:ref:`TString<api_TString>` & *name*)

Loads translation table with provided file *name*. This method generates the LanguageChange event for the Engine instance. An Engine instance will propagate the event to all top-level widgets, where reimplementation of event() can re-translate user-visible Strings. Returns true on success; otherwise returns false.

----

.. _api_Engine_1b538fc6:

 :ref:`TString<api_TString>`  **Engine::locationAppConfig** ()

Returns path to application config directory.

----

.. _api_Engine_9451ed23:

 :ref:`TString<api_TString>`  **Engine::organizationName** ()

Returns the name of the organization that wrote this application. This name is used to create the path to the settings and logs for this application.

**See also** setOrganizationName().

----

.. _api_Engine_d6159240:

 :ref:`TString<api_TString>`  **Engine::reference** (:ref:`Object<api_Object>` * *object*)

Returns resource path for the provided resource *object*.

----

.. _api_Engine_46e7d5f2:

 bool **Engine::reloadBundle** ()

This method reads the index file for the resource bundle. The index file helps to find required game resources. Returns true in case of success; otherwise returns false.

----

.. _api_Engine_892650d7:

 void **Engine::reloadResource** (:ref:`TString<api_TString>` & *path*)

Reloads the resource located along the *path*.

**See also** loadResource().

----

.. _api_Engine_6cf9ea35:

 :ref:`RenderSystem<api_RenderSystem>` * **Engine::renderSystem** ()

Returns the render system which can be used in external modules.

----

.. _api_Engine_5e7f94bc:

 :ref:`ResourceSystem<api_ResourceSystem>` * **Engine::resourceSystem** ()

Returns the resource management system which can be used in external modules.

----

.. _api_Engine_bc863dfe:

 void **Engine::setApplicationName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of this application.

**See also** applicationName().

----

.. _api_Engine_5e28cfd1:

 void **Engine::setApplicationVersion** (:ref:`TString<api_TString>` & *version*)

Sets the *version* of this application.

**See also** applicationVersion().

----

.. _api_Engine_91cfb50d:

 void **Engine::setGameMode** (bool  *flag*)

Set game *flag* to true if game started; otherwise set false.

**See also** isGameMode().

----

.. _api_Engine_a08c6943:

 void **Engine::setOrganizationName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of the organization that wrote this application.

**See also** organizationName().

----

.. _api_Engine_437f8d92:

 bool **Engine::setPlatformAdaptor** (:ref:`PlatformAdaptor<api_PlatformAdaptor>` * *platform*)

Replaces a current *platform* adaptor with new one; Returns true if replacement been succeeded; otherwise returns false.


**Note:** The previous *platform* adaptor will not be deleted.


----

.. _api_Engine_1f763c0d:

 void **Engine::setValue** (:ref:`TString<api_TString>` & *key*, :ref:`Variant<api_Variant>` & *value*)

Sets the *value* of setting *key* to *value*. If the *key* already exists, the previous *value* will be overwritten.

**See also** *value*().

----

.. _api_Engine_2a76c915:

 bool **Engine::start** ()

Starts the main game cycle. Also this method loads the first level of your game. Returns true if successful; otherwise returns false.

----

.. _api_Engine_487fdc6e:

 void **Engine::syncValues** ()

Applies all unsaved settings.

----

.. _api_Engine_259c4f6e:

 :ref:`TString<api_TString>`  **Engine::translate** (:ref:`TString<api_TString>` & *source*)

Returns the translation text for the *source* String.

----

.. _api_Engine_1a47eb95:

 void **Engine::unloadAllScenes** ()

Unloads all scenes from the World.

----

.. _api_Engine_f9675148:

 void **Engine::unloadResource** (:ref:`Resource<api_Resource>` * *resource*)

Forcely unloads the *resource* from memory.


Warning: After this call, the reference on the *resource* may become an invalid at any time and must not be used anymore.


**See also** loadResource().

----

.. _api_Engine_3789bc0e:

 void **Engine::unloadResource** (:ref:`TString<api_TString>` & *path*)

Forcely unloads the resource located along the *path* from memory.


Warning: After this call, the reference on the resource may become an invalid at any time and must not be used anymore.


**See also** loadResource().

----

.. _api_Engine_2134de0b:

 void **Engine::unloadScene** (:ref:`Scene<api_Scene>` * *scene*)

Unloads the *scene* from the World.

----

.. _api_Engine_0ac3fb47:

 void **Engine::update** ()

This method launches all your game modules responsible for processing all the game logic. It calls on each iteration of the game cycle.


**Note:** Usually, this method calls internally and must not be called manually.


----

.. _api_Engine_21e5b436:

 :ref:`Variant<api_Variant>`  **Engine::value** (:ref:`TString<api_TString>` & *key*, :ref:`Variant<api_Variant>` & *defaultValue* = Variant())

Returns the value for setting *key*. If the setting doesn't exist, returns *defaultValue*.

**See also** setValue().

----

.. _api_Engine_6405bdc8:

 :ref:`World<api_World>` * **Engine::world** ()

Returns game World.


**Note:** The game can have only one scene graph. World is a root object, all map loads on this World.



