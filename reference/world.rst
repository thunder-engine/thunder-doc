.. _api_World:

World
=====

Inherited: None

.. _api_World_description:

Description
-----------


Note: A scene object creating automatically by the engine. Only one World instance can be created in the game. A scene object must be set as a parent for other game hierarchies to show them on the screen. The main scene graph object can be retrieved using Engine::sceneGraph()




.. _api_World_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`activeScene<api_World_8fa3b0c4>` () const                                           |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`activeSceneChanged<api_World_c2173b05>` ()                                          |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`createScene<api_World_107d562c>` (const TString & name)                             |
+------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Object<api_Object>` * | :ref:`gameController<api_World_a2f038ec>` () const                                        |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`graphUpdated<api_World_8f406ac2>` ()                                                |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`isToBeUpdated<api_World_adbc7e16>` ()                                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`loadScene<api_World_41c9db7a>` (const TString & path, bool  additive)               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`makeDirty<api_World_f1675c0e>` ()                                                   |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`rayCast<api_World_4725836e>` (const Ray & ray, float  maxDistance, Ray::Hit * hit)  |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`sceneLoaded<api_World_624391bc>` ()                                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`sceneUnloaded<api_World_b1c9fa65>` ()                                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setActiveScene<api_World_e1ac4869>` (Scene * scene)                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setGameController<api_World_36de21ca>` (Object * controller)                        |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setRayCastHandler<api_World_e024d678>` (RayCastCallback  callback, System * system) |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setToBeUpdated<api_World_07d65a48>` (bool  flag)                                    |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadAll<api_World_3e45fc6a>` ()                                                   |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadScene<api_World_d6e204c1>` (Scene * scene)                                    |
+------------------------------+-------------------------------------------------------------------------------------------+



.. _api_World_static:

Static Methods
--------------

None

.. _api_World_methods:

Methods Description
-------------------

.. _api_World_8fa3b0c4:

 :ref:`Scene<api_Scene>` * **World::activeScene** () const

Returns an active Scene.

There must always be one Scene marked as the active at the same time.

**See also** setActiveScene().

----

.. _api_World_c2173b05:

 void **World::activeSceneChanged** ()

Emmits signal when active scene has been changed.

----

.. _api_World_107d562c:

 :ref:`Scene<api_Scene>` * **World::createScene** (:ref:`TString<api_TString>` & *name*)

Create an empty new Scene at runtime with the given *name*.

----

.. _api_World_a2f038ec:

 :ref:`Object<api_Object>` * **World::gameController** () const

Returns a game controller object.

Game controller is abstract object respocible for various gameplay aspects.

**See also** setGameController().

----

.. _api_World_8f406ac2:

 void **World::graphUpdated** ()

Emmits signal when graph has been updated.

----

.. _api_World_adbc7e16:

 bool **World::isToBeUpdated** ()

Returns in case of scene must be updated in the current frame; otherwise returns false.

----

.. _api_World_41c9db7a:

 :ref:`Scene<api_Scene>` * **World::loadScene** (:ref:`TString<api_TString>` & *path*, bool  *additive*)

Loads the scene stored in the .map files by the it's *path*.


**Note:** The previous scenes will be not unloaded in the case of an *additive* flag is true.


----

.. _api_World_f1675c0e:

 void **World::makeDirty** ()

Marks World as dirty. Mainly used to detect scene graph configuration changes.

----

.. _api_World_4725836e:

 bool **World::rayCast** (:ref:`Ray<api_Ray>` & *ray*, float  *maxDistance*, :ref:`Ray::Hit<api_Ray::Hit>` * *hit*)

Casts a *ray*, of length *maxDistance*, against all colliders in the World. Returns true if the *ray* has a *hit* point with a Collider; otherwise returns false.

----

.. _api_World_624391bc:

 void **World::sceneLoaded** ()

Emmits signal when scene has been loaded.

----

.. _api_World_b1c9fa65:

 void **World::sceneUnloaded** ()

Emmits signal when scene has been unloaded.

----

.. _api_World_e1ac4869:

 void **World::setActiveScene** (:ref:`Scene<api_Scene>` * *scene*)

Sets the *scene* to be active.

There must always be one Scene marked as the active at the same time.

**See also** activeScene().

----

.. _api_World_36de21ca:

 void **World::setGameController** (:ref:`Object<api_Object>` * *controller*)

Sets the game *controller*.

Game *controller* is abstract object respocible for various gameplay aspects.

**See also** gameController().

----

.. _api_World_e024d678:

 void **World::setRayCastHandler** (:ref:`RayCastCallback<api_RayCastCallback>`  *callback*, :ref:`System<api_System>` * *system*)

Sets the raycast *callback* function.

This function will be used to check intersections with in game geometry. In the most cases implemented in the physical engines. This *callback* is added by any physical *system* by the default.

----

.. _api_World_07d65a48:

 void **World::setToBeUpdated** (bool  *flag*)

Sets an update *flag*.

**See also** isToBeUpdated().

----

.. _api_World_3e45fc6a:

 void **World::unloadAll** ()

Unloads all from the World.

----

.. _api_World_d6e204c1:

 void **World::unloadScene** (:ref:`Scene<api_Scene>` * *scene*)

Unloads the *scene* from the World.


