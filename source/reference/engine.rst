.. _api_Engine:

Engine
======

Inherited: :ref:`ObjectSystem<api_ObjectSystem>`

.. _api_Engine_description:

Description
-----------

The Engine class is one of the central parts of the Thunder Engine. This class is created first and removed last in your game. It is responsible for many basic functions, such as game cycle, management of game modules, loading and unloading of game resources, work with game settings.



.. _api_Engine_public:

Public Methods
--------------

+--+----------------------------------------+
|  | :ref:`Engine<api_Engine_9be40783>` ()  |
+--+----------------------------------------+
|  | :ref:`~Engine<api_Engine_62e3db4a>` () |
+--+----------------------------------------+



.. _api_Engine_static:

Static Methods
--------------

+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`addModule<api_Engine_fe641ac3>` (Module * module)                                                               |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`TString<api_TString>` | :ref:`applicationName<api_Engine_675839bd>` ()                                                                        |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`TString<api_TString>` | :ref:`applicationVersion<api_Engine_1ac94d02>` ()                                                                     |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                      :ref:`Actor<api_Actor>` * | :ref:`composeActor<api_Engine_9f34c785>` (const TString & component, const TString & name, Object * parent = nullptr) |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`System<api_System>` * | :ref:`getSystem<api_Engine_10d89735>` (const TString & name)                                                          |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           bool | :ref:`init<api_Engine_03c5fb87>` ()                                                                                   |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Engine<api_Engine>` & | :ref:`instance<api_Engine_f7e2c501>` ()                                                                               |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           bool | :ref:`isGameMode<api_Engine_d6921fa3>` ()                                                                             |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           bool | :ref:`isResourceExist<api_Engine_f0b46a91>` (const TString & path)                                                    |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                :ref:`Resource<api_Resource>` * | :ref:`loadResource<api_Engine_cbdf6e01>` (const TString & path)                                                       |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                :ref:`Resource<api_Resource>` * | :ref:`loadResourceAsync<api_Engine_2c7b4f3d>` (const TString & path)                                                  |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           bool | :ref:`loadTranslator<api_Engine_2f3ac1b0>` (const TString & name)                                                     |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`TString<api_TString>` | :ref:`locationAppConfig<api_Engine_5487a3dc>` ()                                                                      |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`TString<api_TString>` | :ref:`organizationName<api_Engine_c43f89a5>` ()                                                                       |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|  :ref:`PlatformAdaptor<api_PlatformAdaptor>` * | :ref:`platformAdaptor<api_Engine_7e2a0b3c>` ()                                                                        |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`TString<api_TString>` | :ref:`reference<api_Engine_1f06d5c9>` (Object * object)                                                               |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`reloadResource<api_Engine_62c4fab5>` (const TString & path)                                                     |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|        :ref:`RenderSystem<api_RenderSystem>` * | :ref:`renderSystem<api_Engine_a456c0b9>` ()                                                                           |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|    :ref:`ResourceSystem<api_ResourceSystem>` * | :ref:`resourceSystem<api_Engine_2c6f81b3>` ()                                                                         |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`setApplicationName<api_Engine_d41b8207>` (const TString & name)                                                 |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`setApplicationVersion<api_Engine_a85e7649>` (const TString & version)                                           |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`setGameMode<api_Engine_fde78c0a>` (bool  flag)                                                                  |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`setOrganizationName<api_Engine_e27a689b>` (const TString & name)                                                |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           bool | :ref:`setPlatformAdaptor<api_Engine_8de2bcfa>` (PlatformAdaptor * platform)                                           |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`setValue<api_Engine_1fabc706>` (const TString & key, const Variant & value)                                     |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           bool | :ref:`start<api_Engine_90f51abc>` ()                                                                                  |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`syncValues<api_Engine_b83679e2>` ()                                                                             |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`TString<api_TString>` | :ref:`translate<api_Engine_20f8756b>` (const TString & text)                                                          |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`unloadResource<api_Engine_625be879>` (const TString & path)                                                     |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`unloadResource<api_Engine_6c3e2750>` (Resource * resource)                                                      |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                           void | :ref:`update<api_Engine_6d2eb50a>` (World * world)                                                                    |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                    :ref:`Variant<api_Variant>` | :ref:`value<api_Engine_b20f6e31>` (const TString & key, const Variant & defaultValue = Variant())                     |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                      :ref:`World<api_World>` * | :ref:`world<api_Engine_078cf14b>` ()                                                                                  |
+------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+

.. _api_Engine_methods:

Methods Description
-------------------

.. _api_Engine_9be40783:

**Engine::Engine** ()

Constructs Engine.

----

.. _api_Engine_62e3db4a:

**Engine::~Engine** ()

Destructs Engine, related objects, registered object factories and platform adaptor.

----

.. _api_Engine_fe641ac3:

 void **Engine::addModule** (:ref:`Module<api_Module>` * *module*)

Adds a game *module* to pool. This *module* will be used during update() method execution.

Example:

::

    if(engine->init()) {
        Engine::addModule(new RenderGL(engine));
    
        engine->start();
    }

----

.. _api_Engine_675839bd:

 :ref:`TString<api_TString>`  **Engine::applicationName** ()

Returns the name of this application. This name is used to create the path to the settings and logs for this application.

**See also** setApplicationName().

----

.. _api_Engine_1ac94d02:

 :ref:`TString<api_TString>`  **Engine::applicationVersion** ()

Returns the version of this application.

**See also** setApplicationVersion().

----

.. _api_Engine_9f34c785:

 :ref:`Actor<api_Actor>` * **Engine::composeActor** (:ref:`TString<api_TString>` & *component*, :ref:`TString<api_TString>` & *name*, :ref:`Object<api_Object>` * *parent* = nullptr)

Creates an Actor with *name* and attached component. Created Actor will be added to the hierarchy of parent. This method helps to create all dependencies for the component.


Warning: This method should be used only in Editor mode.


----

.. _api_Engine_10d89735:

 :ref:`System<api_System>` * **Engine::getSystem** (:ref:`TString<api_TString>` & *name*)

Returns a sub system with specific name.

----

.. _api_Engine_03c5fb87:

 bool **Engine::init** ()

Initializes all engine systems. Returns true if successful; otherwise returns false.

----

.. _api_Engine_f7e2c501:

 :ref:`Engine<api_Engine>` & **Engine::instance** ()

Returns Engine object instance.

----

.. _api_Engine_d6921fa3:

 bool **Engine::isGameMode** ()

Returns true if game started; otherwise returns false.

----

.. _api_Engine_f0b46a91:

 bool **Engine::isResourceExist** (:ref:`TString<api_TString>` & *path*)

Returns true if resource with *path* exists; otherwise returns false.

----

.. _api_Engine_cbdf6e01:

 :ref:`Resource<api_Resource>` * **Engine::loadResource** (:ref:`TString<api_TString>` & *path*)

Returns an instance for loading resource by the provided path.


**Note:** In case of resource was loaded previously this function will return the same instance.


**See also** unloadResource().

----

.. _api_Engine_2c7b4f3d:

 :ref:`Resource<api_Resource>` * **Engine::loadResourceAsync** (:ref:`TString<api_TString>` & *path*)

Returns an instance for loading resource by the provided path. The resource will be loaded asynchronously. This means you should check the state of resource before use it.


**Note:** In case of resource was loaded previously this function will return the same instance.


**See also** unloadResource().

----

.. _api_Engine_2f3ac1b0:

 bool **Engine::loadTranslator** (:ref:`TString<api_TString>` & *name*)

Loads translation table with provided file name. This method generates the LanguageChange event for the Engine instance. An Engine instance will propagate the event to all top-level widgets, where reimplementation of event() can re-translate user-visible Strings. Returns true on success; otherwise returns false.

----

.. _api_Engine_5487a3dc:

 :ref:`TString<api_TString>`  **Engine::locationAppConfig** ()

Returns path to application config directory.

----

.. _api_Engine_c43f89a5:

 :ref:`TString<api_TString>`  **Engine::organizationName** ()

Returns the name of the organization that wrote this application. This name is used to create the path to the settings and logs for this application.

**See also** setOrganizationName().

----

.. _api_Engine_7e2a0b3c:

 :ref:`PlatformAdaptor<api_PlatformAdaptor>` * **Engine::platformAdaptor** ()

Return the current platform adaptor.

**See also** setPlatformAdaptor().

----

.. _api_Engine_1f06d5c9:

 :ref:`TString<api_TString>`  **Engine::reference** (:ref:`Object<api_Object>` * *object*)

Returns resource path for the provided resource object.

----

.. _api_Engine_62c4fab5:

 void **Engine::reloadResource** (:ref:`TString<api_TString>` & *path*)

Reloads the resource located along the path.

**See also** loadResource().

----

.. _api_Engine_a456c0b9:

 :ref:`RenderSystem<api_RenderSystem>` * **Engine::renderSystem** ()

Returns the render system which can be used in external modules.

----

.. _api_Engine_2c6f81b3:

 :ref:`ResourceSystem<api_ResourceSystem>` * **Engine::resourceSystem** ()

Returns the resource management system which can be used in external modules.

----

.. _api_Engine_d41b8207:

 void **Engine::setApplicationName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of this application.

**See also** applicationName().

----

.. _api_Engine_a85e7649:

 void **Engine::setApplicationVersion** (:ref:`TString<api_TString>` & *version*)

Sets the *version* of this application.

**See also** applicationVersion().

----

.. _api_Engine_fde78c0a:

 void **Engine::setGameMode** (bool  *flag*)

Set game *flag* to true if game started; otherwise set false.

**See also** isGameMode().

----

.. _api_Engine_e27a689b:

 void **Engine::setOrganizationName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of the organization that wrote this application.

**See also** organizationName().

----

.. _api_Engine_8de2bcfa:

 bool **Engine::setPlatformAdaptor** (:ref:`PlatformAdaptor<api_PlatformAdaptor>` * *platform*)

Replaces a current *platform* adaptor with new one; Returns true if replacement been succeeded; otherwise returns false.


**Note:** The previous *platform* adaptor will not be deleted.


**See also** platformAdaptor().

----

.. _api_Engine_1fabc706:

 void **Engine::setValue** (:ref:`TString<api_TString>` & *key*, :ref:`Variant<api_Variant>` & *value*)

Sets the *value* of setting *key* to value. If the *key* already exists, the previous *value* will be overwritten.

**See also** value().

----

.. _api_Engine_90f51abc:

 bool **Engine::start** ()

Starts the main game cycle. Also this method loads the first level of your game. Returns true if successful; otherwise returns false.

----

.. _api_Engine_b83679e2:

 void **Engine::syncValues** ()

Applies all unsaved settings.

----

.. _api_Engine_20f8756b:

 :ref:`TString<api_TString>`  **Engine::translate** (:ref:`TString<api_TString>` & *text*)

Returns the translation of text.

----

.. _api_Engine_625be879:

 void **Engine::unloadResource** (:ref:`TString<api_TString>` & *path*)

Forcely unloads the resource located along the *path* from memory.


Warning: After this call, the reference on the resource may become an invalid at any time and must not be used anymore.


**See also** loadResource().

----

.. _api_Engine_6c3e2750:

 void **Engine::unloadResource** (:ref:`Resource<api_Resource>` * *resource*)

Forcely unloads the *resource* from memory.


Warning: After this call, the reference on the *resource* may become an invalid at any time and must not be used anymore.


**See also** loadResource().

----

.. _api_Engine_6d2eb50a:

 void **Engine::update** (:ref:`World<api_World>` * *world*)

This method launches all your game modules responsible for processing all the game logic. It calls on each iteration of the game cycle for the particular world.


**Note:** Usually, this method calls internally and must not be called manually.


----

.. _api_Engine_b20f6e31:

 :ref:`Variant<api_Variant>`  **Engine::value** (:ref:`TString<api_TString>` & *key*, :ref:`Variant<api_Variant>` & *defaultValue* = Variant())

Returns the value for setting key. If the setting doesn't exist, returns defaultValue.

**See also** setValue().

----

.. _api_Engine_078cf14b:

 :ref:`World<api_World>` * **Engine::world** ()

Returns game World.


**Note:** The game can have only one scene graph. World is a root object, all map loads on this World.



