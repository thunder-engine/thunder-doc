.. _api_World:

World
=====

Inherited: :ref:`Object<api_Object>`

.. _api_World_description:

Description
-----------


Note: A World object creating automatically by the engine. Only one World instance can be created in the game. A World object must be set as a parent for other game hierarchies to show them on the screen. The main scene graph object can be retrieved using Engine::world()




.. _api_World_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`activeScene<api_World_c8250d74>` () const                                           |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`activeSceneChanged<api_World_e63c592a>` ()                                          |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`createScene<api_World_d9f5b20a>` (const TString & name)                             |
+------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Object<api_Object>` * | :ref:`gameController<api_World_2d37c85a>` () const                                        |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`graphUpdated<api_World_29b571df>` ()                                                |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`isActive<api_World_8e36509d>` ()                                                    |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`loadScene<api_World_4a25dc19>` (const TString & path, bool  additive)               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`rayCast<api_World_4ef1a708>` (const Ray & ray, float  maxDistance, Ray::Hit * hit)  |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`sceneLoaded<api_World_ed74c2f9>` ()                                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`sceneUnloaded<api_World_b1d85fe9>` ()                                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setActive<api_World_52e894cd>` (bool  flag)                                         |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setActiveScene<api_World_c986273f>` (Scene * scene)                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setGameController<api_World_9edac71f>` (Object * controller)                        |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setRayCastHandler<api_World_13864fdc>` (RayCastCallback  callback, System * system) |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadAll<api_World_9dcfb756>` ()                                                   |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadScene<api_World_d829f657>` (Scene * scene)                                    |
+------------------------------+-------------------------------------------------------------------------------------------+



.. _api_World_static:

Static Methods
--------------

None

.. _api_World_methods:

Methods Description
-------------------

.. _api_World_c8250d74:

 :ref:`Scene<api_Scene>` * **World::activeScene** () const

Returns an active Scene.

There must always be one Scene marked as the active at the same time.

**See also** setActiveScene().

----

.. _api_World_e63c592a:

 void **World::activeSceneChanged** ()

Emmits signal when active scene has been changed.

----

.. _api_World_d9f5b20a:

 :ref:`Scene<api_Scene>` * **World::createScene** (:ref:`TString<api_TString>` & *name*)

Create an empty new Scene at runtime with the given name.

----

.. _api_World_2d37c85a:

 :ref:`Object<api_Object>` * **World::gameController** () const

Returns a game controller object.

Game controller is abstract object respocible for various gameplay aspects.

**See also** setGameController().

----

.. _api_World_29b571df:

 void **World::graphUpdated** ()

Emmits signal when graph has been updated.

----

.. _api_World_8e36509d:

 bool **World::isActive** ()

Returns in case of world is active and must be updated in the current frame; otherwise returns false.

----

.. _api_World_4a25dc19:

 :ref:`Scene<api_Scene>` * **World::loadScene** (:ref:`TString<api_TString>` & *path*, bool  *additive*)

Loads the scene stored in the .map files by the it's path.


**Note:** The previous scenes will be not unloaded in the case of an *additive* flag is true.


----

.. _api_World_4ef1a708:

 bool **World::rayCast** (:ref:`Ray<api_Ray>` & *ray*, float  *maxDistance*, :ref:`Ray::Hit<api_Ray_Hit>` * *hit*)

Casts a ray, of length maxDistance, against all colliders in the World. Returns true if the *ray* has a *hit* point with a Collider; otherwise returns false.

----

.. _api_World_ed74c2f9:

 void **World::sceneLoaded** ()

Emmits signal when scene has been loaded.

----

.. _api_World_b1d85fe9:

 void **World::sceneUnloaded** ()

Emmits signal when scene has been unloaded.

----

.. _api_World_52e894cd:

 void **World::setActive** (bool  *flag*)

Sets an active flag. For active worlds engine launches the simulation.

**See also** isActive().

----

.. _api_World_c986273f:

 void **World::setActiveScene** (:ref:`Scene<api_Scene>` * *scene*)

Sets the *scene* to be active.

There must always be one Scene marked as the active at the same time.

**See also** activeScene().

----

.. _api_World_9edac71f:

 void **World::setGameController** (:ref:`Object<api_Object>` * *controller*)

Sets the game controller.

Game *controller* is abstract object respocible for various gameplay aspects.

**See also** gameController().

----

.. _api_World_13864fdc:

 void **World::setRayCastHandler** (:ref:`RayCastCallback<api_RayCastCallback>`  *callback*, :ref:`System<api_System>` * *system*)

Sets the raycast *callback* function.

This function will be used to check intersections with in game geometry. In the most cases implemented in the physical engines. This *callback* is added by any physical *system* by the default.

----

.. _api_World_9dcfb756:

 void **World::unloadAll** ()

Unloads all from the World.

----

.. _api_World_d829f657:

 void **World::unloadScene** (:ref:`Scene<api_Scene>` * *scene*)

Unloads the *scene* from the World.


